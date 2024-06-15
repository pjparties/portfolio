import Navbar from '../../components/Navbar';

const Home = () => {
    return (
        <div className='app-wrapper px-[24px] lg:px-[126px]'>
            <div className="bg-background ">
                <Navbar />
                <p className="text-primary text-5xl font-bold font-mono">
                    Hey, It's Parth
                </p>
            </div>
        </div>
    )
}

export default Home