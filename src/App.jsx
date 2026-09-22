import React, { lazy, Suspense, useContext, useEffect } from 'react'
import Test from './Lecture-2/Test'
// import StudentCard from './Lecture-2/StudentCard'
import CompanyCard from './Lecture-2/CompanyCard'
// import ProductCard from './Lecture-2/ProductCard'
import RestaurantCard from './Lecture-2/RestaurantCard'
import EmployeeProfile from './Lecture-2/EmployeeProfile'
import BookInfo from './Lecture-2/BookInfo'
import MovieInfo from './Lecture-2/MovieInfo'
import PersonalPortfolio from './Lecture-2/PersonalPortfolio'
import DynamicVariable from './Lecture-2/DynamicVariable'
import Greting from './Lecture-2/Greting'
import MultipleJsx from './Lecture-2/MultipleJsx'
import Deshbord from './Lecture-2/Deshbord'


import Welcome from './Lecture-3/Compononts/Welcome'
// import StudentProfile from './Lecture-3/Compononts/StudentProfile'
import Header from './Lecture-3/Compononts/Header'
import Footer from './Lecture-3/Compononts/Footer'
import Nevbar from './Lecture-3/Compononts/Nevbar'
import ProductCart from './Lecture-3/Compononts/ProductCart'
import UserCard from './Lecture-3/Compononts/UserCard'
import Login from './Lecture-3/Compononts/Login'
import Employe from './Lecture-3/Compononts/Employe'
import MultipleUseCompo from './Lecture-3/Compononts/MultipleUseCompo'
import DefoltExport_1 from './Lecture-3/Compononts/DefoltExport_1'
import DefoltExport_2 from './Lecture-3/Compononts/DefoltExport_2'
import DefoltExport_3 from './Lecture-3/Compononts/DefoltExport_3'
import { Add, Sub } from './Lecture-3/Compononts/Meth'
import CollegeHeader from './Lecture-3/Compononts/CollegeHeader'
import CollegeAbout from './Lecture-3/Compononts/CollegeAbout'
import CollegeCource from './Lecture-3/Compononts/CollegeCource'
import CollegeFooter from './Lecture-3/Compononts/CollegeFooter'
import Hero from './Lecture-3/Compononts/Hero'
import PortfoliyoAbout from './Lecture-3/Compononts/PortfoliyoAbout'
import Skills from './Lecture-3/Compononts/Skills'
import NewsHeader from './Lecture-3/Compononts/NewsHeader'
import LatestNews from './Lecture-3/Compononts/LatestNews'
import Sidebar from './Lecture-3/Compononts/Sidebar'
import WebsiteHeader from './Lecture-3/Compononts/WebsiteHeader'
import WebsiteProductCard from './Lecture-3/Compononts/WebsiteProductCard'
import WebsiteFooter from './Lecture-3/Compononts/WebsiteFooter'
import StudentCompo from './Lecture-4/StudentCompo'
import ProductCompo from './Lecture-4/ProductCompo'
import EmployCompo from './Lecture-4/EmployCompo'
import CourseCompo from './Lecture-4/CourseCompo'
import StudentList from './Lecture-6/StudentList'
import CompunyCompo from './Lecture-4/CompunyCompo'
import UserCompo from './Lecture-4/UserCompo'
import MovieCard from './Lecture-4/MovieCard'
import BookCompo from './Lecture-4/BookCompo'
import MobileCompo from './Lecture-4/MobileCompo'
import RestorentCompo from './Lecture-4/RestorentCompo'
import UserProfile from './Lecture-4/UserProfile'
import StudentProfile from './Lecture-4/StudentProfile'
import Object from './Lecture-4/Object'
import Boolen from './Lecture-4/Boolen'
import ProductCard from './Lecture-4/ProductCard'
import CologeStudent from './Lecture-4/CologeStudent'
import Netflix from './Lecture-4/Netflix'
import Perent from './Lecture-4/Perent'
import Header_1 from './Lecture-4/Components/Header_1'
import ProductCard_1 from './Lecture-4/Components/ProductCard_1'
import Footer_1 from './Lecture-4/Components/Footer_1'
import Task_7 from './Lecture-7/Task_7'

import Task_5 from './Lecture-5/Task_5'
import Task_8 from './Lecture-8/Task_8'
import Task_9 from './Lecture-9/Task_9'
import Lec10_Home from './Lecture-10/Pages/Lec10_Home'
import Lec10_About from './Lecture-10/Pages/Lec10_About'
import Lec10_Contect from './Lecture-10/Pages/Lec10_Contect'
import { Route, Routes } from 'react-router-dom'
import Lec10_Nevbar from './Lecture-10/Pages/Lec10_Nevbar'
import StudentDeshbord from './Lecture-10/Pages/StudentDeshbord'
import Dashbord from './Lecture-10/Pages/Dashbord'
import Course from './Lecture-10/Pages/Course'
import Profile from './Lecture-10/Pages/Profile'
import CompanyWebsite from './Lecture-10/Pages/CompanyWebsite'
import Company_Home from './Lecture-10/Pages/Company_Home'
import Company_Services from './Lecture-10/Pages/Company_Services'
import Company_Contect from './Lecture-10/Pages/Company_Contect'
import Company_About from './Lecture-10/Pages/Company_About'
import Restaurent from './Lecture-10/Pages/Restaurent'
import Restaurent_Home from './Lecture-10/Pages/Restaurent_Home'
import Restaurent_Menu from './Lecture-10/Pages/Restaurent_Menu'
import Restaurent_Gallery from './Lecture-10/Pages/Restaurent_Gallery'
import Restaurent_Contect from './Lecture-10/Pages/Restaurent_Contect'
import HospitalHome from './Lecture-10/Pages/HospitalHome'
import HospitalDoctors from './Lecture-10/Pages/HospitalDoctors'
import HospitalAppointments from './Lecture-10/Pages/HospitalAppointments'
import HospitalContact from './Lecture-10/Pages/HospitalContact'
import HospitalNavbar from './Lecture-10/Pages/HospitalNavbar'
import CollegeNavbar from './Lecture-10/Pages/CollegeNavbar'
import CollegeHome from './Lecture-10/Pages/CollegeHome'
import CollegeCourse from './Lecture-10/Pages/CollegeCourse'
import CollegeAdmission from './Lecture-10/Pages/CollegeAdmission'
import CollegeFaculty from './Lecture-10/Pages/CollegeFaculty'
import CollegeContact from './Lecture-10/Pages/CollegeContact'
import BankingNavbar from './Lecture-10/Pages/BankingNavbar'
import BankingDashboard from './Lecture-10/Pages/BankingDashboard'
import BankingAccounts from './Lecture-10/Pages/BankingAccounts'
import BankingTransactions from './Lecture-10/Pages/BankingTransactions'
import BankingTransferMoney from './Lecture-10/Pages/BankingTransferMoney'
import BankingProfile from './Lecture-10/Pages/BankingProfile'
import EmployeeNavbar from './Lecture-10/Pages/EmployeeNavbar'
import EmployeeDashboard from './Lecture-10/Pages/EmployeeDashboard'
import EmployeeList from './Lecture-10/Pages/EmployeeList'
import EmployeeDepartment from './Lecture-10/Pages/EmployeeDepartment'
import EmployeeAttendance from './Lecture-10/Pages/EmployeeAttendance'
import EmployeeSalary from './Lecture-10/Pages/EmployeeSalary'
import ShoppingNavbar from './Lecture-10/Pages/ShoppingNavbar'
import ShoppingHome from './Lecture-10/Pages/ShoppingHome'
import ShoppingProducts from './Lecture-10/Pages/ShoppingProducts'
import ShoppingCategories from './Lecture-10/Pages/ShoppingCategories'
import ShoppingCart from './Lecture-10/Pages/ShoppingCart'
import ShoppingWishlist from './Lecture-10/Pages/ShoppingWishlist'
import MovieNavbar from './Lecture-10/Pages/MovieNavbar'
import MovieHome from './Lecture-10/Pages/MovieHome'
import MovieMovies from './Lecture-10/Pages/MovieMovies'
import MovieBooking from './Lecture-10/Pages/MovieBooking'
import MovieOffers from './Lecture-10/Pages/MovieOffers'
import MovieContact from './Lecture-10/Pages/MovieContact'
import LibraryNavbar from './Lecture-10/Pages/LibraryNavbar'
import LibraryHome from './Lecture-10/Pages/LibraryHome'
import LibraryBooks from './Lecture-10/Pages/LibraryBooks'
import LibraryMembers from './Lecture-10/Pages/LibraryMembers'
import LibraryIssueBook from './Lecture-10/Pages/LibraryIssueBook'
import LibraryContact from './Lecture-10/Pages/LibraryContact'
import FoodNavbar from './Lecture-10/Pages/FoodNavbar'
import FoodHome from './Lecture-10/Pages/FoodHome'
import FoodRestaurants from './Lecture-10/Pages/FoodRestaurants'
import FoodOrders from './Lecture-10/Pages/FoodOrders'
import FoodOffers from './Lecture-10/Pages/FoodOffers'
import FoodContact from './Lecture-10/Pages/FoodContact'
import ELearningNavbar from './Lecture-10/Pages/ELearningNavbar'
import ELearningHome from './Lecture-10/Pages/ELearningHome'
import ELearningCourses from './Lecture-10/Pages/ELearningCourses'
import ELearningMyLearning from './Lecture-10/Pages/ELearningMyLearning'
import ELearningCertificate from './Lecture-10/Pages/ELearningCertificate'
import ELearningProfile from './Lecture-10/Pages/ELearningProfile'
import PortfolioNavbar from './Lecture-10/Pages/PortfolioNavbar'
import PortfolioHome from './Lecture-10/Pages/PortfolioHome'
import PortfolioAbout from './Lecture-10/Pages/PortfolioAbout'
import PortfolioProjects from './Lecture-10/Pages/PortfolioProjects'
import PortfolioSkills from './Lecture-10/Pages/PortfolioSkills'
import PortfolioContact from './Lecture-10/Pages/PortfolioContact'
import EcommerceNavbar from './Lecture-10/E-commerce/EcommerceNavbar'
import EcommerceHome from './Lecture-10/E-commerce/Pages/EcommerceHome'
import EcommerceProducts from './Lecture-10/E-commerce/Pages/EcommerceProducts'
import EcommerceProductDetails from './Lecture-10/E-commerce/Pages/EcommerceProductDetails'
import EcommerceCategories from './Lecture-10/E-commerce/Pages/EcommerceCategories'
import EcommerceWishlist from './Lecture-10/E-commerce/Pages/EcommerceWishlist'
import EcommerceCart from './Lecture-10/E-commerce/Pages/EcommerceCart'
import EcommerceOrders from './Lecture-10/E-commerce/Pages/EcommerceOrders'
import EcommerceProfile from './Lecture-10/E-commerce/Pages/EcommerceProfile'
import EcommerceAbout from './Lecture-10/E-commerce/Pages/EcommerceAbout'
import EcommerceContact from './Lecture-10/E-commerce/Pages/EcommerceContact'
import Lec11_Home from './Lecture-11/Lec11_Home'
import Lec11_About from './Lecture-11/Lec11_About'
import Lec11_Contect from './Lecture-11/Lec11_Contect'
import Lec11_Profile from './Lecture-11/Lec11_Profile'
import Lec11_Login from './Lecture-11/Lec11_Login'
import Lec11_Deshbord from './Lecture-11/Lec11_Deshbord'
import Lec11_Ragistration from './Lecture-11/Lec11_Ragistration'
import Lec11_SucceasPage from './Lecture-11/Lec11_SucceasPage'
import Lec11_ProductPage from './Lecture-11/Lec11_ProductPage'
import Lec11_ProductDetails from './Lecture-11/Lec11_ProductDetails'
import Lec11_EmployList from './Lecture-11/Lec11_EmployList'
import Lec11_EmployDetails from './Lecture-11/Lec11_EmployDetails'
import Lec11_BlogDetails from './Lecture-11/Lec11_BlogDetails'
import Lec11_BlogList from './Lecture-11/Lec11_BlogList'
import Lec11_MovieList from './Lecture-11/Lec11_MovieList'
import Lec11_MovieDetails from './Lecture-11/Lec11_MovieDetails'
import Lec11_PatientList from './Lecture-11/Lec11_PatientList'
import Lec11_PatientDetails from './Lecture-11/Lec11_PatientDetails'
import Lec11_CourseList from './Lecture-11/Lec11_CourseList'
import Lec11_CourseDetails from './Lecture-11/Lec11_CourseDetails'
import ProductDetails from './Lecture-11/ProductDetails'
import Lec11_ProductList from './Lecture-11/Lec11_ProductList'
import Lec11_EmployeeDirectory from './Lecture-11/Lec11_EmployeeDirectory'
import Lec11_EmployeeProfile from './Lecture-11/Lec11_EmployeeProfile'
import Lec11_BookList from './Lecture-11/Lec11_BookList'
import Lec11_BookDetails from './Lecture-11/Lec11_BookDetails'
import Lec11_AccountList from './Lecture-11/Lec11_AccountList'
import Lec11_AccountDetails from './Lecture-11/Lec11_AccountDetails'
import Lec11_OrderList from './Lecture-11/Lec11_OrderList'
import Lec11_OrderDetails from './Lecture-11/Lec11_OrderDetails'
import Lec11_UserPost from './Lecture-11/Lec11_UserPost'
import Lec11_OrderSuccess from './Lecture-11/Lec11_OrderSuccess'
import Lec11_Checkout from './Lecture-11/Lec11_Checkout'
import Lec11_Cart from './Lecture-11/Lec11_Cart'
import Lec11_ProductDetails_2 from './Lecture-11/Lec11_ProductDetails_2'
import Lec11_Products from './Lecture-11/Lec11_Products'
import Layout from './Lecture-12/Layout'
import Lac12_Home from './Lecture-12/Lac12_Home'
import Lec12_Contect from './Lecture-12/Lec12_Contect'
import Lec12_About from './Lecture-12/Lec12_About'
import Lec12_Services from './Lecture-12/Lec12_Services'
import Lec12_Profile from './Lecture-12/Lec12_Profile'
import Lec12_Course from './Lecture-12/Lec12_Course'
import Lec12_Assingnment from './Lecture-12/Lec12_Assingnment'
import Lec12_UserPage from './Lecture-12/Lec12_UserPage'
import Lec12_ProductsPage from './Lecture-12/Lec12_ProductsPage'
import Lec12_Orders from './Lecture-12/Lec12_Orders'
import Lec12_Reports from './Lecture-12/Lec12_Reports'
import Lec12_Attendance from './Lecture-12/Lec12_Attendance'
import Lec12_Salary from './Lecture-12/Lec12_Salary'
import Lec12_Patient from './Lecture-12/Lec12_Patient'
import Lec12_Docter from './Lecture-12/Lec12_Docter'
import Lec12_Appoinment from './Lecture-12/Lec12_Appoinment'
import Lec12_Billing from './Lecture-12/Lec12_Billing'
import Lec12_Sidebar from './Lecture-12/Lec12_Sidebar'
import Lec12_Student from './Lecture-12/Lec12_Student'
import Lec12_Teacher from './Lecture-12/Lec12_Teacher'
import Lec12_Subject from './Lecture-12/Lec12_Subject'
import Lec12_Account from './Lecture-12/Lec12_Account'
import Lec12_Transactions from './Lecture-12/Lec12_Transactions'
import Lec12_Crads from './Lecture-12/Lec12_Crads'
import Lec12_Loans from './Lecture-12/Lec12_Loans'
import Lec12_Books from './Lecture-12/Lec12_Books'
import Lec12_Authors from './Lecture-12/Lec12_Authors'
import Lec12_Categories from './Lecture-12/Lec12_Categories'
import Lec12_Members from './Lecture-12/Lec12_Members'
import Lec12_Customers from './Lecture-12/Lec12_Customers'
import Lac12_leads from './Lecture-12/Lac12_leads'
import Lec12_Sales from './Lecture-12/Lec12_Sales'
import Lec12_Settings from './Lecture-12/Lec12_Settings'
import Lac12_Dashbord from './Lecture-12/Lac12_Dashbord'
import Lac12_UserActivity from './Lecture-12/Lac12_UserActivity'
import Lac12_Flights from './Lecture-12/Lac12_Flights'
import Lac12_Hotels from './Lecture-12/Lac12_Hotels'
import Lac12_Bookings from './Lecture-12/Lac12_Bookings'
import Lac12_Payments from './Lecture-12/Lac12_Payments'
import Lac12_CustomerSupport from './Lecture-12/Lac12_CustomerSupport'
import Lac12_DashboardLayout from './Lecture-12/Lac12_DashboardLayout'
import Lec13_Home from './Lecture-13/Lec13_Home'
// import Lac13_About from './Lecture-13/Lac13_About'
import Lac13_Contect from './Lecture-13/Lac13_Contect'
import Lac13_LoginPage from './Lecture-13/Lac13_LoginPage'
import Lac13_ProtectedRoute from './Lecture-13/Lac13_ProtectedRoute'
import Lac13_Deshbord from './Lecture-13/Lac13_Deshbord'
import Lac13_User from './Lecture-13/Lac13_User'
import Lac13_Admin from './Lecture-13/Lac13_Admin'
import Lac13_Error from './Lecture-13/Lac13_Error'
import Lac14_Message from './Lecture-14/Lac14_Message'
import Lac14_Navbar from './Lecture-14/Componants/Lac14_Navbar'
import Lac14_DashboardCard from './Lecture-14/Componants/Lac14_DashboardCard'
import Lac14_DigitalClock from './Lecture-14/Componants/Lac14_DigitalClock'
import Lac14_ThemeToggle from './Lecture-14/Componants/Lac14_ThemeToggle'
import Lac14_UserList from './Lecture-14/Componants/Lac14_UserList'
import Lac14_WindowSize from './Lecture-14/Componants/Lac14_WindowSize'
import Lac15_Dashbord from './Lecture-15/Student-project/Pages/Lac15_Dashbord'
import { AuthContext } from './Lecture-15/Student-project/Context/Lac15_AuthContext'
// import Lac15_Login from './Lecture-15/Student-project/Pages/Lac15_LoginPage'
// import UseTransition from './Lecture-17/UseTransition'
// import Dashboard from './Lecture-17/Task-Mengment-Project/pages/Dashboard'
import Lac19_Dashboard from './Lecture-19/Componente/Lac19_Dashboard'
import Dashboard from './Lecture-21/Componentes/Dashboard'
import MainPage from './Lecture-22/Pages/MainPage'
import Home from './Lecture-22/Pages/home'
import About from './Lecture-22/Pages/About'
import Contact from './Lecture-22/Pages/Contact'
import Services from './Lecture-22/Pages/Services'
import ProductPage from './Lecture-22/Pages/ProductPage'
import Test_1 from './Test_1'
import WithMessge from './Lecture-26/WithMessge'
import WrapComponent from './Lecture-26/WrapComponent'
import Task_27 from './Lecture-27/Task_27'
import StudentData from './Lecture-28/StudentData'
import CustomStudentdata from './Lecture-28/CustomStudentdata'
import Counter from './Lecture-30/Counter'
import ApiReducer from './Lecture-30/ApiReducer'
import App_1 from './Pressantesan/App_1'

function App() {
  // let students = ["Kavy", "Hiya", "Het", "Aastha"];

  // const Lac13_About = lazy(() => import("./Lecture-13/Lac13_About"));

  // const { isLogin } = useContext(AuthContext);



  return (
    <>
      {/* 
      <Test />
      <StudentCard />
      <CompanyCard />
      <ProductCard />
      <RestaurantCard />
      <EmployeeProfile />
      <BookInfo />
      <MovieInfo />
      <PersonalPortfolio />
      <DynamicVariable />
      <Greting />
      <MultipleJsx />
      <Deshbord/> */}

      {/* <Assingment-2> */}

      {/* <Welcome />
      <StudentProfile />
      <Header />
      <Footer />
      <Nevbar />
      <ProductCart />
      <UserCard />
      <Login />
      <Employe />
      <MultipleUseCompo />
      <MultipleUseCompo />
      <MultipleUseCompo />
      <MultipleUseCompo />
      <MultipleUseCompo />
      <DefoltExport_1 />
      <DefoltExport_2 />
      <DefoltExport_3 />
      <Add />
      <Sub />
      <CollegeHeader />
      <CollegeAbout />
      <CollegeCource/>
      <CollegeFooter/>
      <Hero/>
      <PortfoliyoAbout/>
      <Skills/>
      <NewsHeader/>
      <LatestNews/>
      <Sidebar/>
      <WebsiteHeader/>
      <WebsiteProductCard/>
      <WebsiteProductCard/>
      <WebsiteProductCard/>
      <WebsiteProductCard/>
      <WebsiteFooter/> */}

      {/* <Assingment-3> */}

      {/* <StudentCompo
        name="Kavy"
        age="19"
        course="Full Stack Programming"
      />

      <ProductCompo
        Productname="Aecrelic Vinteg Wall Light"
        Price="2500"
        Cetegory="Wall Light"
      />

      <EmployCompo
        Employename="Kavy Patel"
        Department="It Department"
        Salary="15,000"
      />

      <CourseCompo
        Coursename="Full Stack"
        Duration="1.5 Yers"
        Instructor="15,000"
      />

      <CompunyCompo
        CompunyName="Web Tec."
        Location="Ahemdabad"
        Total_Employe="500"
      />

      <UserCompo
        UserName="kavy@123"
        Profection="Full Stack Devloper"
        City="Ahemdabad"
      />

      <MovieCard
        Title="Dabang"
        Rating="4.5"
        ReleseYear="2015"
      />

      <BookCompo
        BookTitle="Can We Be Strangers Again?"
        Author="Albert Einstein"
        Price="250"
      />

      <MobileCompo
        Name="S25 Ultra"
        Brand="Samsung"
        Price="1,20,000"
      />

      <RestorentCompo
        FoodName="Pasta"
        Price="250"
        Cetegory="Fast Food"
      />



      <StudentProfile
        StudentName="Kishan Prajapati"
        Marks="89"
        PassGrade="B+"

      />

      <UserProfile />

      {/* <Array data={students}/> */}

      {/* <Object data={{
        name: "Kavy",
        age: 19
      }} />



      <Boolen username="Kavy" isOnline={true} />
      <Boolen username="Hiya" isOnline={false} />
      <Boolen username="Het" isOnline={true} />
      <Boolen username="Aastha" isOnline={false} />

      <ProductCard
        Ptroducts1={{
          name: "EaerPhone",
          Price: 2500,
          Category: "Electronics",
          Rating: 4.5
        }}
      />
      <ProductCard
        Ptroducts1={{
          name: "HeadPhone",
          Price: 3000,
          Category: "Electronics",
          Rating: 4.5
        }}
      />
      <ProductCard
        Ptroducts1={{
          name: "T.V",
          Price: 40000,
          Category: "Electronics",
          Rating: 4.5
        }}
      />
      <ProductCard
        Ptroducts1={{
          name: "Microwave",
          Price: 8000,
          Category: "Electronics",
          Rating: 4.5
        }}
      />
      <ProductCard
        Ptroducts1={{
          name: "A.C",
          Price: 25000,
          Category: "Electronics",
          Rating: 4.5
        }}
      />

      <CologeStudent
        Students={{
          Name: "Kavy",
          Course: "BCA",
          Semester: 3
        }}
      />
      <CologeStudent
        Students={{
          Name: "Het",
          Course: "MCA",
          Semester: 2
        }}
      />
      <CologeStudent
        Students={{
          Name: "Hiya",
          Course: "BCA",
          Semester: 3
        }}
      />
      <CologeStudent
        Students={{
          Name: "Harsh",
          Course: "BBA",
          Semester: 4
        }}
      />
      <CologeStudent
        Students={{
          Name: "Harshit",
          Course: "MSC.It",
          Semester: 2
        }}
      />



      <Netflix
        Movies={{
          Title: "Rowdy Rathode",
          Genre: "Action",
          Rating: 8.5,
          Releseyear: 2010
        }}
      />
      <Netflix
        Movies={{
          Title: "Gangs of Wasseypur ",
          Genre: "Drama",
          Rating: 9,
          Releseyear: 2012
        }}
      />
      <Netflix
        Movies={{
          Title: "3 Idiots ",
          Genre: "Comedy",
          Rating: 8.8,
          Releseyear: 2009
        }}
      />
      <Netflix
        Movies={{
          Title: "Lagaan",
          Genre: "Social Drama",
          Rating: 8,
          Releseyear: 2001
        }}
      />
      <Netflix
        Movies={{
          Title: "Dangal",
          Genre: "Biographical drama",
          Rating: 8.3,
          Releseyear: 2018
        }}
      />
      <Netflix
        Movies={{
          Title: "Zindagi Na Milegi Dobara ",
          Genre: " self-discovery",
          Rating: 8.2,
          Releseyear: 2011
        }}
      />


      <Perent username="Kavy" />


      <Header_1 />
      <ProductCard_1
        Product={{
          id: 1,
          name: "Wireless Mouse",
          price: 799,
          image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400"
        }}
      />
      <ProductCard_1
        Product={{
          id: 2,
          name: "Gaming Keyboard",
          price: 2499,
          image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=400"
        }}
      />
      <ProductCard_1
        Product={{
          id: 3,
          name: "Bluetooth Headphones",
          price: 3499,
          image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400"
        }}
      />
      <ProductCard_1
        Product={{
          id: 4,
          name: "Smart Watch",
          price: 4999,
          image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400"
        }}
      /> */}
      {/* <ProductCard_1
        Product={{
          id: 5,
          name: "USB-C Charger",
          price: 1299,
          image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400"
        }}
      /> */}
      {/* <ProductCard_1
        Product={{
          id: 6,
          name: "Laptop Stand",
          price: 1799,
          image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400"
        }}
      /> */}
      {/* <Footer_1 /> */}

      {/* <Assingment-4> */}

      {/* <Assingment-5> */}

      {/* <Task_5/> */}

      {/* <Assingment-6> */}
      {/* <StudentList/> */}

      {/* <Assingment-7> */}

      {/* <Task_7/> */}

      {/* <Assingment-8> */}
      {/* <Task_8/> */}

      {/* <Assingment-9> */}
      {/* <Task_9/> */}

      {/* <Assingment-10> */}
      {/* <Routes>
        <Route
          path='/'
          element={<Lec10_Home />}
        />
        <Route
          path='/about'
          element={<Lec10_About />}
        />
        <Route
          path='/contect'
          element={<Lec10_Contect />}
        />
        <Route
          path='/nevbar'
          element={<Lec10_Nevbar />}
        />


        <Route
          path='/studentdeshbord'
          element={<StudentDeshbord />}
        />
        <Route
          path='/dashbord'
          element={<Dashbord />}
        />
        <Route
          path='/course'
          element={<Course />}
        />
        <Route
          path='/profile'
          element={<Profile />}
        />


        <Route
          path='/companyWebsite'
          element={<CompanyWebsite />}
        />
        <Route
          path='/CompanyHome'
          element={<Company_Home />}
        />
        <Route
          path='/CompanyServices'
          element={<Company_Services />}
        />
        <Route
          path='/CompanyAbout'
          element={<Company_About />}
        />
        <Route
          path='/CompanyContect'
          element={<Company_Contect />}
        />


        <Route
          path='/restaurent'
          element={<Restaurent />}
        />
        <Route
          path='/restaurentHome'
          element={<Restaurent_Home />}
        />
        <Route
          path='/restaurentMenu'
          element={<Restaurent_Menu />}
        />
        <Route
          path='/restaurentGallery'
          element={<Restaurent_Gallery />}
        />
        <Route
          path='/restaurentContect'
          element={<Restaurent_Contect />}
        />


        <Route path="/hospitalNavbar" element={<HospitalNavbar />} />
        <Route path="/hospitalHome" element={<HospitalHome />} />
        <Route path="/doctors" element={<HospitalDoctors />} />
        <Route path="/appointments" element={<HospitalAppointments />} />
        <Route path="/hospitalContact" element={<HospitalContact />} />


        <Route path="/collegeNavbar" element={<CollegeNavbar />} />
        <Route path="/collegeHome" element={<CollegeHome />} />
        <Route path="/collegeCourse" element={<CollegeCourse />} />
        <Route path="/collegeAdmission" element={<CollegeAdmission />} />
        <Route path="/collegeFaculty" element={<CollegeFaculty />} />
        <Route path="/collegeContact" element={<CollegeContact />} />


        <Route path="/bank-navbar" element={<BankingNavbar />} />
        <Route path="/bank-dashboard" element={<BankingDashboard />} />
        <Route path="/bank-accounts" element={<BankingAccounts />} />
        <Route path="/bank-transactions" element={<BankingTransactions />} />
        <Route
          path="/bank-transfer-money"
          element={<BankingTransferMoney />}
        />
        <Route path="/bank-profile" element={<BankingProfile />} />


        <Route path="/employee-navbar" element={<EmployeeNavbar />} />
        <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
        <Route path="/employee-list" element={<EmployeeList />} />
        <Route path="/employee-department" element={<EmployeeDepartment />} />
        <Route path="/employee-attendance" element={<EmployeeAttendance />} />
        <Route path="/employee-salary" element={<EmployeeSalary />} />


        <Route path="/shop-navbar" element={<ShoppingNavbar />} />
        <Route path="/shop-home" element={<ShoppingHome />} />
        <Route path="/shop-products" element={<ShoppingProducts />} />
        <Route path="/shop-categories" element={<ShoppingCategories />} />
        <Route path="/shop-cart" element={<ShoppingCart />} />
        <Route path="/shop-wishlist" element={<ShoppingWishlist />} />


        <Route path="/movie-navbar" element={<MovieNavbar />} />
        <Route path="/movie-home" element={<MovieHome />} />
        <Route path="/movie-movies" element={<MovieMovies />} />
        <Route path="/movie-booking" element={<MovieBooking />} />
        <Route path="/movie-offers" element={<MovieOffers />} />
        <Route path="/movie-contact" element={<MovieContact />} />


        <Route path="/library-navbar" element={<LibraryNavbar />} />
        <Route path="/library-home" element={<LibraryHome />} />
        <Route path="/library-books" element={<LibraryBooks />} />
        <Route path="/library-members" element={<LibraryMembers />} />
        <Route path="/library-issue-book" element={<LibraryIssueBook />} />
        <Route path="/library-contact" element={<LibraryContact />} />



        <Route path="/food-navbar" element={<FoodNavbar />} />
        <Route path="/food-home" element={<FoodHome />} />
        <Route path="/food-restaurants" element={<FoodRestaurants />} />
        <Route path="/food-orders" element={<FoodOrders />} />
        <Route path="/food-offers" element={<FoodOffers />} />
        <Route path="/food-contact" element={<FoodContact />} />


        <Route path="/elearn-navbar" element={<ELearningNavbar />} />
        <Route path="/elearn-home" element={<ELearningHome />} />
        <Route path="/elearn-courses" element={<ELearningCourses />} />
        <Route path="/elearn-my-learning" element={<ELearningMyLearning />} />
        <Route
          path="/elearn-certificate"
          element={<ELearningCertificate />}
        />
        <Route path="/elearn-profile" element={<ELearningProfile />} />


        <Route path="/portfolio-navbar" element={<PortfolioNavbar />} />
        <Route path="/portfolio-home" element={<PortfolioHome />} />
        <Route path="/portfolio-about" element={<PortfolioAbout />} />
        <Route path="/portfolio-projects" element={<PortfolioProjects />} />
        <Route path="/portfolio-skills" element={<PortfolioSkills />} />
        <Route path="/portfolio-contact" element={<PortfolioContact />} />


        <Route path="/shop-navbar" element={<EcommerceNavbar />} />
        <Route path="/shop-home" element={<EcommerceHome />} />
        <Route path="/shop-products" element={<EcommerceProducts />} />
        <Route
          path="/shop-product-details"
          element={<EcommerceProductDetails />}
        />
        <Route
          path="/shop-categories"
          element={<EcommerceCategories />}
        />
        <Route path="/shop-cart" element={<EcommerceCart />} />
        <Route path="/shop-wishlist" element={<EcommerceWishlist />} />
        <Route path="/shop-orders" element={<EcommerceOrders />} />
        <Route path="/shop-profile" element={<EcommerceProfile />} />
        <Route path="/shop-about" element={<EcommerceAbout />} />
        <Route path="/shop-contact" element={<EcommerceContact />} />

      </Routes> */}

      {/* <Assingment-11> */}

      {/* <Routes> */}
      {/* <Route path='/' element={<Lec11_Home />} />
        <Route path='/about' element={<Lec11_About />} />
        <Route path='/contect' element={<Lec11_Contect />} /> */}
      {/* task-2  */}
      {/* <Route path='/profile' element={<Lec11_Profile />} /> */}
      {/* task-3  */}
      {/* <Route path='/login' element={<Lec11_Login />} />
        <Route path='/deshbord' element={<Lec11_Deshbord />} /> */}
      {/* task-4  */}
      {/* <Route path='/ragistration' element={<Lec11_Ragistration />} />
        <Route path='/succeaspage' element={<Lec11_SucceasPage />} /> */}
      {/* task-5  */}
      {/* <Route path="/productPage" element={<Lec11_ProductPage />} />
        <Route path="/product/:id" element={<Lec11_ProductDetails />} /> */}
      {/* task-6  */}
      {/* <Route path="/employList" element={<Lec11_EmployList />} />
        <Route path="/employ/:id" element={<Lec11_EmployDetails />} /> */}
      {/* task-7  */}
      {/* <Route path="/blogList" element={<Lec11_BlogList />} />
        <Route path="/blog/:id" element={<Lec11_BlogDetails />} /> */}
      {/* task-9  */}
      {/* <Route path="/movieList" element={<Lec11_MovieList />} />
        <Route path="/movie/:id" element={<Lec11_MovieDetails />} /> */}
      {/* task-10  */}
      {/* <Route path="/patientList" element={<Lec11_PatientList />} />
        <Route path="/patient/:id" element={<Lec11_PatientDetails />} /> */}
      {/* task-11  */}
      {/* <Route path="/courseList" element={<Lec11_CourseList />} />
        <Route path="/course/:id" element={<Lec11_CourseDetails />} /> */}
      {/* task-12  */}
      {/* <Route path="/productList" element={<Lec11_ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} /> */}
      {/* task-13  */}
      {/* <Route path="/employeeDirectory" element={<Lec11_EmployeeDirectory />} />
        <Route path="/employee/:id" element={<Lec11_EmployeeProfile />} /> */}
      {/* task-14  */}
      {/* <Route path="/accountList" element={<Lec11_AccountList />} />
        <Route path="/account/:id" element={<Lec11_AccountDetails />} /> */}
      {/* task-15  */}
      {/* <Route path="/bookList" element={<Lec11_BookList />} />
        <Route path="/book/:id" element={<Lec11_BookDetails />} /> */}
      {/* task-16  */}
      {/* <Route path="/orderList" element={<Lec11_OrderList />} />
        <Route path="/order/:id" element={<Lec11_OrderDetails />} /> */}
      {/* task-18  */}
      {/* <Route path="/user/:userId/post/:postId" element={<Lec11_UserPost />} /> */}

      {/* task - 20 */}
      {/* <Route path="/products" element={<Lec11_Products />} />
        <Route path="/product_2/:id" element={<Lec11_ProductDetails_2 />} />
        <Route path="/cart" element={<Lec11_Cart />} /> */}
      {/* <Route path="/checkout" element={<Lec11_Checkout />} />
        <Route path="/success" element={<Lec11_OrderSuccess />} /> */}
      {/* </Routes> */}

      {/* <Assingment-12> */}

      {/* <Routes> */}
      {/* Task-1  */}
      {/* <Route path="/" element={<Layout />}>
          <Route index element={<Lac12_Home />} />
        </Route> */}
      {/* Task-2  */}
      {/* <Route path="/" element={<Layout />}>
          <Route index element={<Lac12_Home />} />
          <Route path='/about' element={<Lec12_About />} />
          <Route path='/contect' element={<Lec12_Contect />} />
        </Route> */}
      {/* Task-3  */}
      {/* <Route path="/" element={<Layout />}>
          <Route index element={<Lac12_Home />} />
          <Route path='/services' element={<Lec12_Services />} />
          <Route path='/contect' element={<Lec12_Contect />} />
        </Route> */}
      {/* Task-4  */}
      {/* <Route path="/" element={<Layout />}> */}
      {/* <Route index element={<Lec12_Profile />} />
          <Route path='/services' element={<Lec12_Course/>} />
          <Route path='/contect' element={<Lec12_Assingnment/>} /> */}
      {/* Task-5  */}
      {/* <Route index element={<Lec12_UserPage />} />
          <Route path='/productsPage' element={<Lec12_ProductsPage />} />
          <Route path='/orders' element={<Lec12_Orders />} />
          <Route path='/reports' element={<Lec12_Reports />} /> */}
      {/* Task-6  */}
      {/* <Route index element={<Lec12_Attendance />} />
          <Route path='/salary' element={<Lec12_Salary />} /> */}
      {/* Task-7  */}
      {/* <Route index element={<Lec12_Patient />} />
          <Route path='/docter' element={<Lec12_Docter />} />
          <Route path='/appoinment' element={<Lec12_Appoinment />} />
          <Route path='/billing' element={<Lec12_Billing />} />
          <Route path='/sidebar' element={<Lec12_Sidebar />} /> */}
      {/* Task-8  */}
      {/* <Route index element={<Lec12_Student/>} />
          <Route path='/teacher' element={<Lec12_Teacher />} />
          <Route path='/subject' element={<Lec12_Subject />} />
          <Route path='/attendance' element={<Lec12_Attendance />} /> */}
      {/* Task-9  */}
      {/* <Route index element={<Lec12_Account/>} />
          <Route path='/transactions' element={<Lec12_Transactions />} />
          <Route path='/cards' element={<Lec12_Crads />} />
          <Route path='/loans' element={<Lec12_Loans />} />
          <Route path='/profile' element={<Lec12_Profile />} /> */}
      {/* Task-10  */}
      {/* <Route index element={<Lec12_Books/>} />
          <Route path='/authors' element={<Lec12_Authors />} />
          <Route path='/categories' element={<Lec12_Categories />} />
          <Route path='/members' element={<Lec12_Members />} /> */}
      {/* Task-13  */}
      {/* <Route index element={<Lec12_Customers/>} />
          <Route path='/leads' element={<Lac12_leads />} />
          <Route path='/sales' element={<Lec12_Sales />} />
          <Route path='/reports' element={<Lec12_Reports />} />
          <Route path='/settings' element={<Lec12_Settings />} /> */}

      {/* <Route index element={<Lac12_Home />} />

          <Route path="dashboard" element={<Lac12_Dashbord />}>
            <Route path="users" element={<Lec12_UserPage/>}>
              <Route path="profile" element={<Lec12_Profile />} />
              <Route path="settings" element={<Lec12_Settings/>} />
              <Route path="activity" element={<Lac12_UserActivity/>} />
            </Route>
          </Route> */}

      {/* <Route index element={<Lac12_Home />} />

          <Route path="dashboard" element={<Lac12_Dashbord />}>
            <Route path="flights" element={<Lac12_Flights />} />
            <Route path="hotels" element={<Lac12_Hotels />} />
            <Route path="bookings" element={<Lac12_Bookings />} />
            <Route path="payments" element={<Lac12_Payments />} />
            <Route path="support" element={<Lac12_CustomerSupport />} />
          </Route>*/}

      {/* </Route> */}
      {/* 
        <Route path="/" element={<Lac12_DashboardLayout />}>

          <Route index element={<Lac12_Home />} />

          <Route path="users" element={<Lec12_UserPage />} />
          <Route path="products" element={<Lec12_ProductsPage />} />
          <Route path="orders" element={<Lec12_Orders />} />
          <Route path="reports" element={<Lec12_Reports />} />
          <Route path="settings" element={<Lec12_Settings />} />

        </Route> */}



      {/* </Routes > */}

      {/* task - 3 */}
      {/* <Suspense fallback={<h2>Loding....</h2>}><Lac13_About /></Suspense> */}

      {/* task - 4 */}
      {/* <Suspense fallback={<h2>Loding....</h2>}>
        <Routes>
          <Route path="/" element={<Lec13_Home />} />
          <Route path="/about"
            element={
              <Lac13_ProtectedRoute>
                <Lac13_About />
              </Lac13_ProtectedRoute>
            }
          />
          <Route path="/deshbord"
            element={
              <Lac13_ProtectedRoute>
                <Lac13_Deshbord />
              </Lac13_ProtectedRoute>
            }
          />
          <Route path="/contact" element={<Lac13_Contect />} />
          <Route path="/login" element={<Lac13_LoginPage />} />
          <Route path="/user" element={<Lac13_User />} />
          <Route path="/admin" element={<Lac13_Admin />} />
          <Route path="*" element={<Lac13_Error/>} />
        </Routes>
      </Suspense> */}

      {/* <Routes>
        <Route path="/message" element={<Lac14_Message/>}/>
        <Route path="/navbar" element={<Lac14_Navbar/>}/>
        <Route path="/dashboardCard" element={<Lac14_DashboardCard/>}/>
        <Route path="/digitalClock" element={<Lac14_DigitalClock/>}/>
        <Route path="/themeToggle" element={<Lac14_ThemeToggle/>}/>
        <Route path="/userList" element={<Lac14_UserList/>}/>
        <Route path="/windowSize" element={<Lac14_WindowSize/>}/>
      </Routes> */}

      {/* <Routes>
        <Route path='/' element={<Lac15_Index/>}/>
      </Routes> */}

      {/* {
        isLogin
          ? <Lac15_Dashbord />
          : <Lac15_Login />
      } */}


      {/* <Routes>
        <Route path='/useTransition' element={<UseTransition />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes> */}
      {/* <Routes> */}
      {/* <Route path='/dashboard' element={<Lac19_Dashboard />} /> */}
      {/* <Route path='/dashboard' element={<Dashboard />} /> */}
      {/* <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />
        <Route path='/productPage' element={<ProductPage />} /> */}

      {/* </Routes> */}

      {/* <Test_1/> */}

      {/* <WithMessge/> */}

      {/* <WrapComponent/> */}

      {/* <Task_27/> */}

      {/* <StudentData/> */}

      {/* <CustomStudentdata/> */}

      {/* <Counter/> */}
      <ApiReducer />

      {/* <App_1/> */}
    </>
  )
}

export default App
