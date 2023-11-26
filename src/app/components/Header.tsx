import Image  from 'next/image'

const Header = () => {

    return (

        <header className = 'flex flex-shrink-0 justify-center bg-black h-[20%]'>
            
            <div className = 'my-[0.5%]'>

                <Image className = "rounded-full my-[1%]  w-full h-full aspect-square mx-auto " src = '/cool-profile-icon-19.jpg' width = "277" height = '277' alt = 'cat_image'></Image>

            </div>

        </header>
    );
};

export default Header;