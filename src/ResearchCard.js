

export default function researchCard({imgsrc, title, description})  {
    return (
        <div class = "full-card lg:px-60px">
        <img src={imgsrc} alt={"title"}  className="research-card-img" /> 
        <div class = "research-description">
        <div class = "news-title"> {title} </div>
        {description}
        <br/>  <br/>
        <br/>  <br/>
        <button class = "basic-button">
        READ MORE
        </button>
        </div>
        </div>
    )
}