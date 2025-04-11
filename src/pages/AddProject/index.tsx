import BlurredContainer from 'src/components/ui/BlurredContainer'
import Title from 'src/components/ui/Title'
import Button from 'src/components/ui/Button'

import { DocumentIcon } from 'src/icons'

const AddProject = () => {
  return (
    <div className="text-white relative z-10">
      <div
        className="relative select-none"
        style={{ height: '25vh', minHeight: '150px' }}
      >
        <div className="absolute xs:left-1/2 xs:top-[2vh] xs:w-[200px] xs:-translate-x-1/2 sm:left-1/2 sm:top-[0vh] sm:w-[220px] sm:-translate-x-1/2 md:left-1/2 md:top-[0vh] md:w-[220px] md:-translate-x-1/2 z-[2]">
          <img
            src="/assets/img/AddProjectPNG/projectPlus.png"
            alt="Plus"
            className="w-full h-auto"
            draggable="false"
          />
        </div>
        <div className="absolute xs:left-[0vw] xs:top-[16vh] xs:w-[120px] sm:left-[0vw] sm:top-[16vh] sm:w-[120px] md:left-[0vw] md:top-[15vh] md:w-[160px] z-[1]">
          <img
            src="/assets/img/AddProjectPNG/leftBlurredBox.png"
            alt="leftBox"
            className="w-full h-auto"
            draggable="false"
          />
        </div>
        <div className="absolute xs:right-[0vw] xs:top-[0vh] xs:w-[100px] sm:right-[0vw] sm:top-[0vh] sm:w-[110px] md:right-[0vw] md:top-[0vh] md:w-[140px] z-[1]">
          <img
            src="/assets/img/AddProjectPNG/rightBlurredBox.png"
            alt="rightBox"
            className="w-full h-auto"
            draggable="false"
          />
        </div>
      </div>
      <BlurredContainer className="flex flex-col">
        <div>
          <Title title="Добавить свой проект" subtitle="TRAFFIC MEDIA" />
          <Button className="flex items-center justify-center bg-[#AE8A64] text-white rounded-xl hover:bg-opacity-80 transition mx-auto h-9 w-9 shadow-lg border-4 border-[#312C28] mb-2">
            <div className="h-4 w-3">
              <DocumentIcon />
            </div>
          </Button>
          <div className="flex flex-col items-center justify-start">
            <div className="w-full mb-12">
              <div className="flex items-center justify-center mb-4">
                <p className="text-sm text-center">
                  Инструкция для более эффективной работы с нашим сервисом
                </p>
              </div>
              <div className="mb-6">
                <h3 className="text-[#9F8360] uppercase text-sm mb-2">
                  УДАРЕНИЯ
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Одним из конкурентных преимуществ нашего сервиса является то,
                  что мы позволяем легко и просто работать с ударениями. Берите
                  ударную гласную в скобки, как в примере ниже, и сможете
                  избежать проблем с ударениями.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-auto flex items-center justify-center">
          <Button className="max-w-[390px] w-[390px] border border-amber-400 text-white py-3 rounded-md">
            Написать
          </Button>
        </div>
      </BlurredContainer>
    </div>
  )
}

export default AddProject
