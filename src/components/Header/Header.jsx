import header from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex items-center justify-between py-5'>
            <h1 className='text-3xl font-semibold'>Knowledge Cafe</h1>
            <img src={header} alt="" />
        </div>
    );
};

export default Header;