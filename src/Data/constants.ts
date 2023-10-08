import { CarouselItem, CreateCarouselItem } from "../Domain/Model/Carousel"
import odin4 from "../assets/images/odin4.jpg";
import odin3 from "../assets/images/odin3.jpg";
import odin2 from "../assets/images/odin2.jpg";
import odin5 from "../assets/images/odin5.jpg";
import odin1 from "../assets/images/odin1.jpg";
import resume from "../assets/documents/resume.PNG";

//  const titleContainer = React.createElement('div');
//  titleContainer.props.className = "carousel-title";

 const resumeContainer = document.createElement('div');
 resumeContainer.className = "content-write";
//  resumeContainer.style.display = 'none';

 const resumeCopy = document.createElement('img');
 resumeCopy.src = resume;

 resumeContainer.appendChild(resumeCopy);

// export const titleDiv = titleContainer;
export const resumeImg = resumeContainer;



export const carouselList:CarouselItem[] =
[
    new CreateCarouselItem(resumeContainer,'resume', odin4),
    new CreateCarouselItem('','dog', odin2),
    new CreateCarouselItem('','dog', odin3),
    new CreateCarouselItem('','dog', odin5),
    new CreateCarouselItem('','dog', odin4),
    new CreateCarouselItem('','dog', odin3),
    new CreateCarouselItem('','dog', odin5),

]

export const pageContentString =
`
<h1 className="hazard-background">UNDER MAINTENANCE
  <p>See mywebsite-4pj.pages.dev for static site</p>
</h1>

<h1>Welcome to My Website!</h1>
<p>To navigate the site, hover over the vertical carousel on the left side of the screen,
  <br /> then use your scroll wheel to rotate the selection</p>
`
