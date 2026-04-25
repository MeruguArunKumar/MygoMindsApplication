export default function GalleryPage() {
  const images = [
    "https://res.cloudinary.com/dslbwf2g9/image/upload/v1775198453/imresizer-_MG_6359_cwcofq.jpg",
    "https://res.cloudinary.com/dslbwf2g9/image/upload/v1775198970/IMG_3252_wjtvra.jpg",
    "https://res.cloudinary.com/dslbwf2g9/image/upload/v1775224537/WhatsApp_Image_2026-04-03_at_6.46.46_PM_1_sk1ocb.jpg",
    "https://res.cloudinary.com/dslbwf2g9/image/upload/v1775199163/IMG_3258_xcopow.jpg",
    "https://res.cloudinary.com/dslbwf2g9/image/upload/v1775200183/IMG_3352_tunp5p.jpg",
    "https://res.cloudinary.com/dslbwf2g9/image/upload/v1775199664/IMG_3282_uzuahd.jpg",
    "https://res.cloudinary.com/dslbwf2g9/image/upload/v1775222175/WhatsApp_Image_2026-04-03_at_5.21.38_PM_qc4tzj.jpg",
    "https://res.cloudinary.com/dslbwf2g9/image/upload/v1775199586/_MG_6294_oditq4.jpg",
    "https://res.cloudinary.com/dslbwf2g9/image/upload/v1775199609/_MG_6346_ozpwqe.jpg",
    "https://res.cloudinary.com/dslbwf2g9/image/upload/v1775221695/Newyearsathya_kcmwmn.png",
    "https://res.cloudinary.com/dslbwf2g9/image/upload/v1775220679/IMG_20231012_145725_uxkxy3.jpg",
    "https://res.cloudinary.com/dslbwf2g9/image/upload/v1775220692/IMG_7547_dykmbb.jpg",
    "https://res.cloudinary.com/dslbwf2g9/image/upload/v1775220671/IMG_1736_ojkvol.jpg",
    "https://res.cloudinary.com/dslbwf2g9/image/upload/v1775220685/IMG_20240216_181708_mkxazi.jpg",
    "https://res.cloudinary.com/dslbwf2g9/image/upload/v1775223138/WhatsApp_Image_2026-04-03_at_6.44.47_PM_jj7bvt.jpg",
    "https://res.cloudinary.com/dslbwf2g9/image/upload/v1775222755/WhatsApp_Image_2026-04-03_at_6.46.46_PM_i399ai.jpg",
    "https://res.cloudinary.com/dslbwf2g9/image/upload/v1775220675/IMG_20230730_121049_ll9qua.jpg",
    "https://res.cloudinary.com/dslbwf2g9/image/upload/v1775220674/IMG_20230730_131857_349_wgxu1i.webp",
    "https://res.cloudinary.com/dslbwf2g9/image/upload/v1775220671/IMG_1662_l03ipx.jpg",
    "https://res.cloudinary.com/dslbwf2g9/image/upload/v1775220661/IMG_0492_f1dx7s.jpg",
    "https://res.cloudinary.com/dslbwf2g9/image/upload/v1775220627/IMG20191024142726_akr2wn.jpg",
    "https://res.cloudinary.com/dslbwf2g9/image/upload/v1775219246/IMG_2199_tp1nx5.jpg",
    "https://res.cloudinary.com/dslbwf2g9/image/upload/v1775220729/IMG_7936_zl8seu.jpg",
    "https://res.cloudinary.com/dslbwf2g9/image/upload/v1775220714/IMG_7661_qypyfz.jpg",
    "https://res.cloudinary.com/dslbwf2g9/image/upload/v1775220667/IMG_1637_qvj93b.jpg",
    "https://res.cloudinary.com/dslbwf2g9/image/upload/v1776493784/IMG_1736_vooiit.webp"
  ];

  const getGridClass = (index: number): string => {
    const patterns = [
      "col-span-2 row-span-2",
      "col-span-1 row-span-1",
      "col-span-1 row-span-2",
      "col-span-2 row-span-1",
      "col-span-1 row-span-1",
      "col-span-1 row-span-2",
      "col-span-2 row-span-1",
      "col-span-1 row-span-1"
    ];
    return patterns[index % patterns.length];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-pink-50 to-red-100 py-20 px-4">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-16 
bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
          Our Moments
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-6">
          {images.map((img, index) => (
            <div
              key={`${img}-${index}`}
              className={`relative overflow-hidden rounded-3xl shadow-lg group ${getGridClass(index)}`}
            >
              <img
                src={img}
                alt={`gallery-${index}`}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/300";
                }}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300"></div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}