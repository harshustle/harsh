// src/pages/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
  return (
    <motion.section
      className="py-16 px-4 bg-white text-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">🚀 Featured Projects</h2>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Tenancy Rental */}
          <div className="border p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-2xl font-semibold mb-2">🔑 Tenancy-Rental</h3>
            <p className="text-gray-700 mb-4">
              A full-stack property rental management system with listings, role-based login, booking, messaging, and an admin dashboard.
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
              <li>Property Listings & Document Uploads</li>
              <li>Tenant/Landlord Roles with Authentication</li>
              <li>Booking, Messaging, Admin Dashboard</li>
              <li>Built with MERN Stack</li>
            </ul>
            <a
              href="https://wanderlust-3ie7.onrender.com/listings"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:underline"
            >
              Live Site <FaExternalLinkAlt className="ml-2 text-xs" />
            </a>
          </div>

          {/* Ecom */}
          <div className="border p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-2xl font-semibold mb-2">🛒 Ecom (E-Commerce Platform)</h3>
            <p className="text-gray-700 mb-4">
              A modern e-commerce site with product catalog, cart, payments, admin panel, and authentication.
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
              <li>Cart & Checkout System</li>
              <li>Admin Dashboard for Inventory</li>
              <li>Stripe/Razorpay Integration</li>
              <li>Built with MERN Stack + Tailwind</li>
            </ul>
            <a
              href="https://ecom-web.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:underline"
            >
              Live Site <FaExternalLinkAlt className="ml-2 text-xs" />
            </a>
          </div>

          {/* Uber API */}
          <div className="border p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-2xl font-semibold mb-2">🚗 Uber-Website (Backend APIs)</h3>
            <p className="text-gray-700 mb-4">
              Backend-only project for managing Uber-like ride requests, user roles, and ride statuses.
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
              <li>Ride Request and Driver Matching</li>
              <li>Authentication and Status Management</li>
              <li>MongoDB + Express Architecture</li>
              <li>Ready for Frontend/Mobile Integration</li>
            </ul>
            <span className="text-sm text-gray-500 italic">API only (No live link)</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}