import Layout from '../../Layout/index';
import LayoutBody from 'components/LayoutBody';
import Card from '../../components/Cards/NotificationCard';

export default function index() {
    return (
        <Layout>
            <LayoutBody className='flex flex-col space-y-10'>
                <h4 className='text-4xl font-semibold'>Notifications</h4>
                <div>
                    {[0, 1, 2, 3, 4, 5].map((el) => {
                        return <Card />;
                    })}
                </div>
            </LayoutBody>
        </Layout>
    );
}
