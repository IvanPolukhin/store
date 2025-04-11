import { Suspense } from 'react'

import { useCatalog } from 'src/pages/Catalog/useCatalog.tsx'

import LoadingWrapper from 'src/features/LoadingWrapper'
import UsefulSlider from 'src/features/Sliders/UsefulSlider'
import ChannelSlider from 'src/features/Sliders/ChannelSlider'

import ButtonTelegram from 'src/components/ui/ButtonTelegram'
import NavBar from 'src/features/NavBar'

const Catalog = () => {
  const { Component, data, error, isLoading, isValidSource } = useCatalog()

  if (isLoading) return <LoadingWrapper isLoading={true} />
  if (error) return <div className="text-red-500">Ошибка загрузки данных</div>
  if (!isValidSource) return <div>Неизвестный источник</div>

  return (
    <>
      <div className="overflow-auto flex justify-center">
        <div className="w-full max-w-[500px]">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-[16px] min-[400px]:text-xl font-unbounded uppercase">
              Полезное
            </h1>
            <ButtonTelegram />
          </div>
          <UsefulSlider />
          <h1 className="text-[16px] min-[400px]:text-xl mb-2 font-unbounded uppercase">
            Каталог каналов
          </h1>
          <ChannelSlider />
          <Suspense fallback={<div>Загрузка компонента...</div>}>
            {Component && <Component data={data} />}
          </Suspense>
        </div>
      </div>
      <NavBar />
    </>
  )
}

export default Catalog
