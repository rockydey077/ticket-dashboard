import React, { useState } from "react";
import styles from "./HomeDash.module.css";
import { BsFillChatDotsFill } from "react-icons/bs";
import { IoTicketSharp } from "react-icons/io5";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { MdForwardToInbox, MdOutlineSendAndArchive } from "react-icons/md";
import ReactApexChart from "react-apexcharts";

const chats = [
  {
    name: "Alice Johnson",
    message:
      "Hey everyone, I just wanted to remind you about our meeting tomorrow morning. Please be sure to review the documents I sent earlier today.",
    time: "10:12 AM",
  },
  {
    name: "Bob Smith",
    message:
      "Thanks, Alice! I'll go through the documents tonight. Looking forward to discussing the new project proposal in the meeting.",
    time: "10:20 AM",
  },
  {
    name: "Charlie Davis",
    message:
      "I've already reviewed the documents and have a few questions about the timeline. We can go over them during the meeting.",
    time: "10:24 AM",
  },
  {
    name: "Diana Patel",
    message:
      "I have some suggestions for the design phase of the project. I will prepare a brief presentation to share with the team.",
    time: "10:32 AM",
  },
  {
    name: "Ethan Wright",
    message:
      "I am concerned about the budget allocation for this project. We need to ensure we stay within the limits while achieving our goals.",
    time: "10:36 AM",
  },
  {
    name: "Fiona Clark",
    message:
      "Good point, Ethan. I will double-check the numbers and provide an updated budget report before the meeting.",
    time: "10:44 AM",
  },
  {
    name: "George Lee",
    message:
      "Let's make sure we're all aligned on the project objectives. It’s crucial that everyone understands the end goal.",
    time: "10:48 AM",
  },
];

const tickets = [
  {
    id: 1,
    ticketId: "TCKT-001",
    customer: {
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      image: "https://i.ibb.co/tb6jXRb/teacher1.png",
    },
    subject: "Unable to login",
    status: "open",
    priority: "high",
    agent: [
      "https://i.ibb.co/tb6jXRb/teacher1.png",
      "https://i.ibb.co/hCsWc0x/teacher2.jpg",
      "https://i.ibb.co/tb6jXRb/teacher1.png",
    ],
    date: "Jun 17, 2024 03.47 PM",
  },
  {
    id: 2,
    ticketId: "TCKT-002",
    customer: {
      name: "Bob Smith",
      email: "bob.smith@example.com",
      image: "https://i.ibb.co/tb6jXRb/teacher1.png",
    },
    subject: "Error on checkout page",
    status: "in progress",
    priority: "medium",
    agent: [],
    date: "Jun 18, 2024 10.15 AM",
  },
  {
    id: 3,
    ticketId: "TCKT-003",
    customer: {
      name: "Carol Williams",
      email: "carol.williams@example.com",
      image: "https://i.ibb.co/tb6jXRb/teacher1.png",
    },
    subject: "Feature request: Dark mode",
    status: "closed",
    priority: "low",
    agent: [
      "https://i.ibb.co/hCsWc0x/teacher2.jpg",
      "https://i.ibb.co/tb6jXRb/teacher1.png",
    ],
    date: "Jun 19, 2024 04.30 PM",
  },
  {
    id: 4,
    ticketId: "TCKT-004",
    customer: {
      name: "David Brown",
      email: "david.brown@example.com",
      image: "https://i.ibb.co/tb6jXRb/teacher1.png",
    },
    subject: "Payment not processed",
    status: "open",
    priority: "high",
    agent: ["https://i.ibb.co/hCsWc0x/teacher2.jpg"],
    date: "Jun 20, 2024 11.05 AM",
  },
  {
    id: 5,
    ticketId: "TCKT-005",
    customer: {
      name: "Eva Green",
      email: "eva.green@example.com",
      image: "https://i.ibb.co/tb6jXRb/teacher1.png",
    },
    subject: "How to reset password?",
    status: "closed",
    priority: "medium",
    agent: [
      "https://i.ibb.co/tb6jXRb/teacher1.png",
      "https://i.ibb.co/hCsWc0x/teacher2.jpg",
      "https://i.ibb.co/tb6jXRb/teacher1.png",
    ],
    date: "Jun 21, 2024 09.15 AM",
  },
  {
    id: 6,
    ticketId: "TCKT-006",
    customer: {
      name: "Frank Lee",
      email: "frank.lee@example.com",
      image: "https://i.ibb.co/tb6jXRb/teacher1.png",
    },
    subject: "Bug in mobile app",
    status: "in progress",
    priority: "high",
    agent: [],
    date: "Jun 22, 2024 02.30 PM",
  },
  {
    id: 7,
    ticketId: "TCKT-007",
    customer: {
      name: "Grace Lee",
      email: "grace.lee@example.com",
      image: "https://i.ibb.co/tb6jXRb/teacher1.png",
    },
    subject: "Website not loading",
    status: "open",
    priority: "high",
    agent: ["https://i.ibb.co/tb6jXRb/teacher1.png"],
    date: "Jun 23, 2024 04.00 PM",
  },
  {
    id: 8,
    ticketId: "TCKT-008",
    customer: {
      name: "Henry Adams",
      email: "henry.adams@example.com",
      image: "https://i.ibb.co/tb6jXRb/teacher1.png",
    },
    subject: "Need help with installation",
    status: "closed",
    priority: "low",
    agent: [
      "https://i.ibb.co/tb6jXRb/teacher1.png",
      "https://i.ibb.co/hCsWc0x/teacher2.jpg",
      "https://i.ibb.co/tb6jXRb/teacher1.png",
    ],
    date: "Jun 24, 2024 01.00 PM",
  },
  {
    id: 9,
    ticketId: "TCKT-009",
    customer: {
      name: "Ivy White",
      email: "ivy.white@example.com",
      image: "https://i.ibb.co/tb6jXRb/teacher1.png",
    },
    subject: "Slow website performance",
    status: "in progress",
    priority: "medium",
    agent: [],
    date: "Jun 25, 2024 08.30 AM",
  },
  {
    id: 10,
    ticketId: "TCKT-010",
    customer: {
      name: "Jack Turner",
      email: "jack.turner@example.com",
      image: "https://i.ibb.co/tb6jXRb/teacher1.png",
    },
    subject: "Request for invoice",
    status: "closed",
    priority: "low",
    agent: [
      "https://i.ibb.co/tb6jXRb/teacher1.png",
      "https://i.ibb.co/hCsWc0x/teacher2.jpg",
    ],
    date: "Jun 26, 2024 10.20 AM",
  },
  {
    id: 11,
    ticketId: "TCKT-011",
    customer: {
      name: "Karen Hill",
      email: "karen.hill@example.com",
      image: "https://i.ibb.co/tb6jXRb/teacher1.png",
    },
    subject: "Unable to update profile",
    status: "open",
    priority: "medium",
    agent: [
      "https://i.ibb.co/tb6jXRb/teacher1.png",
      "https://i.ibb.co/hCsWc0x/teacher2.jpg",
    ],
    date: "Jun 27, 2024 03.50 PM",
  },
  {
    id: 12,
    ticketId: "TCKT-012",
    customer: {
      name: "Leo Martin",
      email: "leo.martin@example.com",
      image: "https://i.ibb.co/tb6jXRb/teacher1.png",
    },
    subject: "Feature request: Export data",
    status: "closed",
    priority: "low",
    agent: [],
    date: "Jun 28, 2024 11.45 AM",
  },
  {
    id: 13,
    ticketId: "TCKT-013",
    customer: {
      name: "Mia Brown",
      email: "mia.brown@example.com",
      image: "https://i.ibb.co/tb6jXRb/teacher1.png",
    },
    subject: "Security issue reported",
    status: "in progress",
    priority: "high",
    agent: [
      "https://i.ibb.co/tb6jXRb/teacher1.png",
      "https://i.ibb.co/hCsWc0x/teacher2.jpg",
      "https://i.ibb.co/tb6jXRb/teacher1.png",
    ],
    date: "Jun 29, 2024 02.10 PM",
  },
  {
    id: 14,
    ticketId: "TCKT-014",
    customer: {
      name: "Nina Lopez",
      email: "nina.lopez@example.com",
      image: "https://i.ibb.co/tb6jXRb/teacher1.png",
    },
    subject: "Refund request",
    status: "closed",
    priority: "medium",
    agent: ["https://i.ibb.co/tb6jXRb/teacher1.png"],
    date: "Jun 30, 2024 09.25 AM",
  },
  {
    id: 15,
    ticketId: "TCKT-015",
    customer: {
      name: "Oscar Green",
      email: "oscar.green@example.com",
      image: "https://i.ibb.co/tb6jXRb/teacher1.png",
    },
    subject: "Account locked",
    status: "open",
    priority: "high",
    agent: ["https://i.ibb.co/hCsWc0x/teacher2.jpg"],
    date: "Jul 01, 2024 11.00 AM",
  },
];

const HomeDash = () => {
  const [chartState, setChartState] = useState({
    series: [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "series2",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  });

  return (
    <div className='lg:px-5 lg:pb-5 lg:pt-2 space-y-3 bg-white w-full'>
      <div className='grid grid-cols-12 gap-3 w-full'>
        <div
          className={`${styles.shadow} lg:pt-5 col-span-12 lg:col-span-4 rounded-lg w-full`}>
          <ReactApexChart
            options={chartState.options}
            series={chartState.series}
            type='area'
            height={350}
          />
        </div>
        <div className='space-y-3 col-span-12 lg:col-span-4'>
          <div
            className={`${styles.shadow} flex gap-2 items-center text-5xl font-bold justify-center  py-10 rounded-lg`}>
            <div>
              <BsFillChatDotsFill />
            </div>
            <div>
              <h3>Chats</h3>
            </div>
          </div>
          <div className='flex gap-3'>
            <div
              className={`${styles.shadow} px-2 lg:px-5 lg:w-[45%] w-full rounded-lg`}>
              <div className='pt-2'>
                <h4 className='text-lg font-bold'>Total chats</h4>
                <p className='text-base'>Current month</p>
              </div>
              <div className='text-8xl lg:h-full font-bold flex justify-center mt-12'>
                <h2>68</h2>
              </div>
            </div>
            <div className='space-y-3 lg:w-[55%] w-full'>
              <div className={`${styles.shadow} px-2 lg:px-5 rounded-lg`}>
                <div className='pt-2'>
                  <h4 className='text-base lg:text-lg font-bold'>
                    AHT Individual
                  </h4>
                  <p className='text-sm lg:text-base'>Current month</p>
                </div>
                <div className='lg:text-3xl text-2xl font-bold px-8 py-4 flex items-center justify-center'>
                  <h2>29:42</h2>
                </div>
              </div>
              <div className={`${styles.shadow} px-2 lg:px-5 rounded-lg`}>
                <div className='pt-2'>
                  <h4 className='text-base lg:text-lg font-bold'>AHT Team</h4>
                  <p className='text-sm lg:text-base'>Current month</p>
                </div>
                <div className='lg:text-3xl text-2xl font-bold px-8 py-4 flex items-center justify-center'>
                  <h2>22:59</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='space-y-3 col-span-12 lg:col-span-4'>
          <div
            className={`${styles.shadow} flex gap-2 items-center text-5xl font-bold justify-center  py-10 rounded-lg`}>
            <div>
              <IoTicketSharp />
            </div>
            <div>
              <h3>Tickets</h3>
            </div>
          </div>
          <div className='flex gap-3'>
            <div
              className={`${styles.shadow} px-2 lg:px-5 lg:w-[45%] w-full rounded-lg`}>
              <div className='pt-2'>
                <h4 className='text-lg font-bold'>Total tickets</h4>
                <p className='text-base'>Current month</p>
              </div>
              <div className='text-8xl lg:h-full font-bold flex justify-center mt-12'>
                <h2>44</h2>
              </div>
            </div>
            <div className='space-y-3 lg:w-[55%] w-full'>
              <div className={`${styles.shadow} px-2 lg:px-5 rounded-lg`}>
                <div className='pt-2'>
                  <h4 className='text-base lg:text-lg font-bold'>
                    AHT Individual
                  </h4>
                  <p className='text-sm lg:text-base'>Current month</p>
                </div>
                <div className='text-2xl lg:text-3xl font-bold px-8 py-4 flex items-center justify-center'>
                  <h2>09:12</h2>
                </div>
              </div>
              <div className={`${styles.shadow} px-2 lg:px-5 rounded-lg`}>
                <div className='pt-2'>
                  <h4 className='text-base lg:text-lg font-bold'>AHT Team</h4>
                  <p className='text-sm lg:text-base'>Current month</p>
                </div>
                <div className='text-2xl lg:text-3xl font-bold px-8 py-4 flex items-center justify-center'>
                  <h2>09:12</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom View */}
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-3`}>
        <div className='space-y-3'>
          <h3 className='text-2xl font-bold'>All Chats ({chats.length})</h3>
          <div className={`overflow-x-auto ${styles.shadow} rounded-lg`}>
            <table className={`table`}>
              {/* head */}
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Message</th>
                  <th>Time</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {chats.slice(0, 7).map((chat, idx) => (
                  <tr key={idx}>
                    <td>{chat.name}</td>
                    <td>{chat.message.slice(0, 35)}...</td>
                    <td>{chat.time}</td>
                    <td className='flex gap-3 items-center text-xl'>
                      <div className={`relative ${styles.shadow}`}>
                        <span className='absolute -right-1 -top-1 w-2 h-2 bg-green-500 rounded-full'></span>
                        <p>
                          <MdForwardToInbox className={`cursor-pointer`} />
                        </p>
                      </div>
                      <p>
                        <IoMdCloseCircleOutline
                          className={`${styles.shadow} cursor-pointer rounded-full`}
                        />
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className='space-y-3'>
          <h3 className='text-2xl font-bold'>All Tickets ({tickets.length})</h3>
          <div className={`overflow-x-auto ${styles.shadow} rounded-lg`}>
            <table className={`table `}>
              {/* head */}
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Subject</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {tickets.slice(0, 7).map((chat, idx) => (
                  <tr key={idx}>
                    <td>{chat?.customer?.name}</td>
                    <td>{chat.subject}</td>
                    <td>{chat.date}</td>
                    <td className='flex gap-3 items-center text-xl'>
                      <p>
                        <MdOutlineSendAndArchive
                          className={`${styles.shadow} cursor-pointer`}
                        />
                      </p>
                      <p>
                        <IoMdCloseCircleOutline
                          className={`${styles.shadow} cursor-pointer rounded-full`}
                        />
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDash;
