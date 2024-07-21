import React from "react";
import { Table, Button } from 'react-bootstrap';
import "./booklist.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tailwindcss/tailwind.css';
import CustomModal from "../commonComponents/CustomModal";
import { bookLists } from "./bookHeader";
import BookForm from "./BookForm";


const BookList = () => {

  const headerList = bookLists()// booklist header
  const data = [
    {
      id: 1,
      title: 'Book one',
      desc: 'something about book',
      author: 'Heli G'
    },
    {
      id: 2,
      title: 'Friends',
      desc: 'something about book',
      author: 'Heli G'
    },
    {
      id: 3,
      title: 'Vampire dairies',
      desc: 'something about book',
      author: 'Heli G'
    }
  ]

  return <div className="py-4 px-3">
    <div className="fs-2 font-medium py-2 d-flex justify-between">

      <h3 className="text-teal-700 ">Book List</h3>
      <CustomModal
        title='Add Book'
        body={<BookForm />}
      >
        <Button>Add Book</Button>
      </CustomModal>
    </div>
    <Table striped bordered hover className="table-teal">
      <thead className="bg-teal-500 text-white">
        <tr style={{ backgroundColor: '#38b2ac', color: 'white' }}>
          {
            headerList.map((th, i) => <th key={'thead_' + i}>{th.title}</th>)
          }
        </tr>
      </thead>
      <tbody>
        {
          data.map((tr, i) => {
            return <tr key={'tbody_' + i}>
              {
                headerList.map(td => {
                  return <td key={`tbody_${i}_${td.id}`}>{tr[td.id]}</td>
                })
              }
            </tr>
          })
        }
      </tbody>
    </Table>
  </div>
};

export default BookList;
