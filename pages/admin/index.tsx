import Wrapper from 'Layout/Wrapper';

const WelcomeScreen: React.FC = () => {
    return (
        <Wrapper>
            <h1 className='text-gray-600 text-5xl text-center font-bold'>
                Welcome to <span className='text-pink-500'>Tours Guide</span>
            </h1>
        </Wrapper>
    );
};

export default WelcomeScreen;
