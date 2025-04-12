import NavBar from 'src/features/NavBar'
import DescriptionCard from 'src/components/shared/DescriptionCard'
import DescriptionChannel from 'src/components/shared/DescriptionChannel'
import FormatOptions from 'src/features/FormatOptions'
import Button from 'src/components/ui/Button'

import useDescription from 'src/pages/Description/useDescription.ts'

const Description = () => {
  const {
    product,
    formats,
    gender,
    selectedFormat,
    selectedPrice,
    handlePriceSelect,
    handleSelectFormat,
    handleAddToCart,
    componentType,
  } = useDescription()

  return (
    <>
      {!product ? (
        <div className="overflow-auto flex justify-center">
          <div className="w-full max-w-[500px]">
            <p className="text-center text-red-500">Продукт не найден</p>
          </div>
        </div>
      ) : (
        <div className="overflow-auto flex justify-center">
          <div className="w-full max-w-[500px] flex flex-col gap-4">
            <div className="flex justify-center">
              <DescriptionCard
                product={product}
                componentType={componentType}
                gender={gender}
              />
            </div>

            <DescriptionChannel
              componentType={componentType}
              priceData={product.price}
              selectedPrice={selectedPrice}
              onSelectPrice={handlePriceSelect}
            />

            <FormatOptions
              formats={formats}
              selectedFormat={selectedFormat}
              onSelect={handleSelectFormat}
              componentType={componentType}
              selectedPrice={selectedPrice}
            />

            <div className="mt-auto flex items-center justify-center">
              <Button
                onClick={handleAddToCart}
                className="max-w-[390px] w-full border border-[#AE8A64] py-3 rounded-md mt-10"
              >
                Добавить
              </Button>
            </div>
          </div>
        </div>
      )}
      <NavBar />
    </>
  )
}

export default Description
