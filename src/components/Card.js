import nerdImage from '../assets/images/image1.png';
import Content from './Content';
import Image from './Image';
import Button from './Button';
import Tag from './Tag';
export default function Card() {
    return (
        <div className='card'>
            <Content>
                <Tag text='EXCLUSIVE'/>
                <h1>React styled  Component</h1>
                <p>
                    Exclusive React JS Tutorial on Styled Components where you will learn why we
                    need this & how to use it.
                </p>
                <div className='buttons'>
                    <Button link="https://lwsbd.link/rsc" text="Watch now" />
                    <Button link="https://lwsbd.link/react" text="Github repo" />
                </div>
            </Content>
            <Image imgSrc={nerdImage} altTag="Nerd" width="250px" />
        </div>
    );
}