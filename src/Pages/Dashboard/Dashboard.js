import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h2 className='text-2xl text-center font-bold text-purple-500'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label htmlFor="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard" className='font-bold'>My Orders</Link></li>
                    <li><Link to="/dashboard/myprofile" className='font-bold'>My Profile</Link></li>
                    <li><Link to="/dashboard/review" className='font-bold'>Add A Review</Link></li>
                    <li><Link to="/dashboard/users" className='font-bold'>Make Admin</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;