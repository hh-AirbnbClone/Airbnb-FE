// import { useState } from 'react';
// import axios from 'axios';
// import Calendar from 'react-calendar';
// import { useQuery } from '@tanstack/react-query';
// import Select from 'react-select';

// function HomeCalendar() {
//   const [date, setDate] = useState('');
//   const [address, setAddress] = useState('');
//   const [guestNum, setGuestNum] = useState('');
//   const [checkInDate, setCheckInDate] = useState(new Date());
//   const [checkOutDate, setCheckOutDate] = useState(new Date());


//   const handleCheckInDateChange = (date) => {
//     setCheckInDate(date);
//   }

//   const handleCheckOutDateChange = (date) => {
//     setCheckOutDate(date);
//   }

//   const handleAddressChange = (selectedOption) => {
//     setAddress(selectedOption);
//   };
  
//   const handleGuestNumChange = (selectedOption) => {
//     setGuestNum(selectedOption);
//   };

//   const handleCalendarSubmit = async () => {
//     await queryFnSearch();
//   }
//   // const queryFnSearch = async () => {
//   //   const response = await axios.get(`http://54.180.98.74/rooms?address=${address.value}&checkInDate=${checkInDate.toISOString()}&checkOutDate=${checkOutDate.toISOString()}&guestNum=${guestNum.value}`);
//   //   return response.data;
//   // }
  

//   const { data, isLoading, error } = useQuery(['roomsSearch'], queryFnSearch);

//   if (isLoading) return <div>Loading...</div>;

//   if (error) return <div>Error: {error.message}</div>;

//   return (
//     <form>
//       <Select
//         value={address}
//         onChange={handleAddressChange}
//         options={[
//           { value: 'Seoul', label: '서울' },
//           { value: 'Busan', label: '부산' },
//           { value: 'Jeju', label: '제주' }
//         ]}
//       />
//       <Select
//         value={guestNum}
//         onChange={handleGuestNumChange}
//         options={[
//           { value: '1', label: '1명' },
//           { value: '2', label: '2명' },
//           { value: '3', label: '3명' },
//           { value: '4', label: '4명' }
//         ]}
//       />
//       <Calendar 
//       onChange={handleCheckInDateChange} value={checkInDate} 
//       />
//       <Calendar 
//       onChange={handleCheckOutDateChange} value={checkOutDate} 
//       />
//       <button onClick={handleCalendarSubmit}>Submit</button>
//       {/* 데이터를 이용하여 UI 구성 */}
//     </form>
//   );
//       }
// export default HomeCalendar;