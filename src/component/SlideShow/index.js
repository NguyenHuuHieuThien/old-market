import SimpleImageSlider from "react-simple-image-slider";
const images = [
    { url: "https://cdn.popsww.com/blog/sites/2/2021/11/top-phim-co-trang-trung-quoc-moi.jpg" },
    { url: "https://i.ytimg.com/vi/ErLlyQsrYTo/maxresdefault.jpg" },
    { url: "https://image.thanhnien.vn/w660/Uploaded/2022/zxaijr/2020_11_24/langdienhadanhtiengdailau10_fksa.png" },
    { url: "https://ilikestatic.s3.ap-southeast-1.amazonaws.com/ilike_static/uploads/2018/04/phim-hoa-ngu-co-trang-2015-hoa-thien-cot-1.jpg" },
    { url: "https://ik.imagekit.io/tvlk/blog/2022/07/phim-co-trang-trung-quoc-1-1024x576.jpg?tr=dpr-2,w-675" },
    { url: "https://toplist.vn/images/800px/thinh-tuyet-lau-634994.jpg" },
    { url: "https://static.mservice.io/blogscontents/momo-upload-api-210822202852-637652609325088623.jpg" },
];
export default function SlideShow() {
    return (
        <div>
            <SimpleImageSlider
                width="100%"
                height={504}
                images={images}
                showBullets={true}
                showNavs={true}
                autoPlay={true}
            />
        </div>
    )
}

