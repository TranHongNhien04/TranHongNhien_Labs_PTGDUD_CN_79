import avatar_small from '../assets/img/avatar_small.png'
import archive_check from '../assets/img/archive_check.png'
import avatar from '../assets/img/avatar.png'
import search from '../assets/img/search.png'

export default function HeaderComponent() {
    return (
        <div className='position-fixed top-0 start-0 w-100' style={{ height: '70px', border: '1px solid #dee2e6' }}>
            <div className='d-flex justify-content-between align-items-center px-4 py-2 bg-white'>
                <div className='d-flex align-items-center gap-2'>
                    <img src={avatar_small} alt="logo" />
                </div>

                <div className='position-relative' style={{ width: '300px' }}>
                    <img src={search}
                        alt="search"
                        className='position-absolute top-50 start-0 translate-middle-y ms-3'
                        style={{ width: '16px', height: '16px' }} />
                    <input type="text" placeholder='What would you like to cook?'
                        className='form-control ps-5 bg-light' />
                </div>

                <ul className='list-unstyled d-flex align-items-center gap-4 m-0'>
                    <li><a href="#" className='text-decoration-none text-muted fw-medium'>What to cook</a></li>
                    <li><a href="#" className='text-decoration-none text-muted fw-medium'>Recipes</a></li>
                    <li><a href="#" className='text-decoration-none text-muted fw-medium'>Ingredients</a></li>
                    <li><a href="#" className='text-decoration-none text-muted fw-medium'>Occasions</a></li>
                    <li><a href="#" className='text-decoration-none text-muted fw-medium'>About Us</a></li>

                    <li>
                        <button className='btn btn-light d-flex align-items-center gap-2 px-3 py-2 border-0' style={{ color: '#ef4f91' }}>
                            <img src={archive_check} alt="box" style={{ width: '16px', height: '16px' }} />
                            Your Recipe Box
                        </button>
                    </li>

                    <li>
                        <img src={avatar} alt="avatar" className='rounded-circle' style={{ width: '40px', height: '40px' }} />
                    </li>
                </ul>
            </div>
        </div>
    )
}
