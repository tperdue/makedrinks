import React from 'react';

const style = {
    width: "120px",
    height: "240px"
}

const wrapperStyle = {
    display: "flex",
    justifyContent: "center",
    paddingTop: "1rem"
}

const src = `//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=easyhallowe01-20&marketplace=amazon&region=US&placement=B07PHXWB29&asins=B07PHXWB29&linkId=a46a5182417ddb3da1aab758fcb4c741&show_border=false&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=ffffff`

const Ad = () => {
    return (
        <div style={wrapperStyle}>

            <iframe
                title="amazon"
                style={style}
                marginWidth={0}
                marginHeight={0}
                scrolling={"no"}
                frameBorder={0}
                src={src}>
            </iframe>
        </div>

    )
}


export default Ad;