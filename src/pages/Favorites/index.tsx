import { useFavorites } from 'src/pages/Favorites/useFavorites'
import FavoriteCard from 'src/components/shared/FavoriteCard'
import BlurredContainer from 'src/components/ui/BlurredContainer'
import Title from 'src/components/ui/Title'
import NavBar from 'src/features/NavBar'

const Favorites = () => {
  const { favorites, componentType } = useFavorites()

  return (
    <div className="relative z-10">
      {!componentType ? (
        <div className="">
          <h1 className="text-2xl font-bold">Ошибка компонента</h1>
          <p>Не удалось найти компонент для отображения.</p>
        </div>
      ) : (
        <>
          <div className="relative select-none h-[25vh] min-h-[150px]">
            <div className="absolute xs:left-[7vw] xs:top-[16vh] xs:w-[80px] sm:left-[10vw] sm:top-[16vh] sm:w-[80px] md:left-[12vw] md:top-[16vh] md:w-[90px] z-[1]">
              <img
                src="/assets/img/FavoritePNG/GoldenStarLeft.png"
                alt="Favorite PNG"
                className="w-full h-auto"
                draggable="false"
              />
            </div>
            <div className="absolute xs:right-[12vw] xs:top-[0vh] xs:w-[40px] sm:right-[10vw] sm:top-[0vh] sm:w-[40px] md:right-[10vw] md:top-[0vh] md:w-[60px] z-[1]">
              <img
                src="/assets/img/FavoritePNG/GoldenStarRight.png"
                alt="Favorite PNG"
                className="w-full h-auto"
                draggable="false"
              />
            </div>
            <div className="absolute xs:left-1/2 xs:top-[4vh] xs:w-[180px] xs:-translate-x-1/2 sm:left-1/2 sm:top-[0vh] sm:w-[180px] sm:-translate-x-1/2 md:left-1/2 md:top-[0vh] md:w-[190px] md:-translate-x-1/2 z-[2]">
              <img
                src="/assets/img/FavoritePNG/SaveInstagram.png"
                alt="Favorite PNG"
                className="w-full h-auto"
                draggable="false"
              />
            </div>
            <div className="absolute xs:left-[0vw] xs:top-[14vh] xs:w-[100px] sm:left-[0vw] sm:top-[12vh] sm:w-[160px] md:left-[0vw] md:top-[12vh] md:w-[180px] z-[1]">
              <img
                src="/assets/img/FavoritePNG/SaveInstagramBlurLeft.png"
                alt="Favorite PNG"
                className="w-full h-auto"
                draggable="false"
              />
            </div>
            <div className="absolute xs:right-[0vw] xs:top-[0vh] xs:w-[200px] sm:right-[0vw] sm:top-[0vh] sm:w-[220px] md:right-[0vw] md:top-[0vh] md:w-[280px] z-[1]">
              <img
                src="/assets/img/FavoritePNG/SaveInstagramBlurRight.png"
                alt="Favorite PNG"
                className="w-full h-auto"
                draggable="false"
              />
            </div>
          </div>

          <BlurredContainer>
            <Title title="Закладки" subtitle="TRAFFIC MEDIA" />
            <div className="text-base leading-relaxed mb-4">
              <p className="mb-2">
                На этой странице вы можете просмотреть каналы, которые добавили
                в <span className="text-[#AE8A64]">Избранное</span>.
              </p>
              <p>
                Этот список доступен только вам. Для удобства вы можете добавить
                сюда каналы, в которых планируете размещения в будущем.
              </p>
            </div>
            <div className="space-y-4">
              {favorites.map(product => (
                <FavoriteCard
                  key={product.id}
                  id={product.id}
                  product={product}
                  componentType={componentType}
                />
              ))}
            </div>
            <NavBar />
          </BlurredContainer>
        </>
      )}
    </div>
  )
}

export default Favorites
