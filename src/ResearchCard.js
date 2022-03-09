

export default function researchCard({imgsrc, title, description})  {
    return (
        <div class = "full-card xl:px-60px">
            <h1> sakljd</h1>
        <img src={imgsrc} alt={"title"}  className="research-card-img" /> 
        <div class = "research-description">
        <div class = "research-title"> {title} </div>
        {description}
        <br/>  <br/>
        <button class = "basic-button">
        {title}
        </button>
        </div>
        </div>
    )
}