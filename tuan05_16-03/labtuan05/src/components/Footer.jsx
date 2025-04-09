import chefifywhite from '../assets/img/chefifywhite.png'

export default function FooterComponent() {

    return (
        <>
            <div className="position-fixed bottom-0 w-100 bg-dark text-white" style={{ height: '280px' }}>
                <div className="container-fluid">

                    <div className='row w-100 d-flex justify-content-between flex-wrap align-items-start'>
                        <div className='col-5'>
                            <div className='mt-4'>
                                <h5>About us</h5>
                                <p style={{ width: '350px' }}>Well come to our website, a wonderful place to explore and learn how to cook like a pro</p>
                                <div className='d-flex'>
                                    <input type="text"
                                        placeholder='Enter your email'
                                        className='form-control' style={{ width: '300px' }} />
                                    <button className='btn text-white' style={{ background: '#ef4f91' }}>Send</button>
                                </div>
                            </div>

                            <div className='d-flex justify-content-between align-items-center mt-4'>
                                <div className='d-flex align-items-center gap-2'>
                                    <img src={chefifywhite} alt="" />
                                    <div className='small'>
                                        © 2023 Chefify Company  Terms of Service | Privacy Policy
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-5'>
                            <div className='mt-4'>
                                <h5>Learn More</h5>
                                <ul className='list-unstyled'>
                                    <li><a href="#" className='text-decoration-none text-white'>Our Cooks</a></li>
                                    <li><a href="#" className='text-decoration-none text-white'>See Our Features</a></li>
                                    <li><a href="#" className='text-decoration-none text-white'>FAQ</a></li>
                                </ul>
                            </div>

                            <div className='mt-4'>
                                <h5>Shop</h5>
                                <ul className='list-unstyled'>
                                    <li><a href="#" className='text-decoration-none text-white'>Gift Subscription</a></li>
                                    <li><a href="#" className='text-decoration-none text-white'>Send us Feedback</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className='col-2'>
                            <div className='mt-4'>
                                <h5>Recipes</h5>
                                <ul className='list-unstyled'>
                                    <li><a href="#" className='text-decoration-none text-white'>What to Cook This Week</a></li>
                                    <li><a href="#" className='text-decoration-none text-white'>Pasta</a></li>
                                    <li><a href="#" className='text-decoration-none text-white'>Dinner</a></li>
                                    <li><a href="#" className='text-decoration-none text-white'>Healthy</a></li>
                                    <li><a href="#" className='text-decoration-none text-white'>Vegetarian</a></li>
                                    <li><a href="#" className='text-decoration-none text-white'>Vegan</a></li>
                                    <li><a href="#" className='text-decoration-none text-white'>Christmas</a></li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}