import * as React from "react";
import { CarouselItem } from "src/Domain/Model/Carousel";
import { PageAppItem } from "src/Domain/Model/SinglePageApp";


type PageAppItemProps = {
    context: PageAppItem;
    selection: CarouselItem;
    onClick: any;
  };

export function NavigatorView ({onClick, context, selection}: PageAppItemProps) {

    setTimeout(() => {

      });
  

  return (
    <div> 
        <label className="switch"
        style={{
            position: 'relative',
            display: 'inline-block',
            width: '20dvw',
            height: '15dvh',
            top: '4.5dvh',

        }}>
        <input type="checkbox" 
        style={{
            opacity: 0,
            width: 0,
            height: 0,
        }}/>
        <span className="slider round"></span>
        </label>

        <div className="navigator"
        onClick={onClick}
        style={{
            position: 'absolute',
            display: 'table',
            tableLayout: 'fixed',
            backgroundColor: '#ccc',
            borderRadius: '25px',
            width: '70dvw',
            top: '5dvh',
            left: '22dvw',
            zIndex: '10000'
        }}>
            {context?.carousel.itemList.map(title => <div
            
             style={{
                backgroundColor: 'white',
                borderRadius: '325px',
                display: 'table-cell',
                textAlign: 'center',
            }}> <p className="navItem" style={{
                fontSize: '50px',
                
            }}>{title.title}</p></div>)}

        </div>
    </div>
    
  );
}
