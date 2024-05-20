import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import orderCoverImg from '../../../assets/shop/banner2.jpg'
import Cover from "../../Shared/Navbar/Cover/Cover";
import UseMenu from '../../Hooks/UseMenu';
import TabPannel from './TabPannel/TabPannel';

const OurShop = () => {

    const menu = UseMenu();

    const saladItem = menu.filter(item => item.category == 'salad')
    const pizzaItem = menu.filter(item => item.category == 'pizza')
    const soupItem = menu.filter(item => item.category == 'soup')
    const dessertItem = menu.filter(item => item.category == 'dessert')
    const drinksItem = menu.filter(item => item.category == 'drinks')


    // console.log(saladItem)

    return (
        <section>
            <Cover img={orderCoverImg} title="Order Food"></Cover>
            <div className='mt-4'>
                <Tabs>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Dessert</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>

                    <TabPanel >
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 my-20">
                            {
                                saladItem.map(i => <TabPannel
                                    key={i._id}
                                    i={i}
                                ></TabPannel>)
                            }
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 my-20">
                            {
                                pizzaItem.map(i => <TabPannel
                                    key={i._id}
                                    i={i}
                                ></TabPannel>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 my-20">
                            {
                                soupItem.map(i => <TabPannel
                                    key={i._id}
                                    i={i}
                                ></TabPannel>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 my-20">
                            {
                                dessertItem.map(i => <TabPannel
                                    key={i._id}
                                    i={i}
                                ></TabPannel>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 my-20">
                            {
                                drinksItem.map(i => <TabPannel
                                    key={i._id}
                                    i={i}
                                ></TabPannel>)
                            }
                        </div>
                    </TabPanel>

                </Tabs>
            </div>
        </section>
    );
};

export default OurShop;