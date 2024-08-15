import React from 'react';
import './AdminDashboard.css';
import AddProductForm from './AddProductForm';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <AddProductForm />
    </div>
  );
};

export default AdminDashboard;
