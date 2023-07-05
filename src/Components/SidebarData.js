import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Home",
    path: "/home",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "Departments",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "All Departments ",
        path: "/departmens",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
    ],
  },

  {
    title: "Employee",
    icon: <FaIcons.FaEnvelopeOpenText />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Add New",
        path: "/add-employee",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Update",
        path: "/update-employee",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Delete",
        path: "/delete-employee",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Single Employee Record",
        path: "/employee",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "All Records",
        path: "/employees",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
];
