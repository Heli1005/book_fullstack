import React, { useEffect, useState } from "react";
import { Table, Button } from 'react-bootstrap';
import "./booklist.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tailwindcss/tailwind.css';
import CustomModal from "../commonComponents/CustomModal";
import { bookLists } from "./bookHeader";
import BookForm from "./BookForm";
import { fetchBooks } from "../redux/bookSlice";
import { useDispatch, useSelector } from "react-redux";



const BookList = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch()
  const headerList = bookLists()// booklist header
  const bookList = useSelector(state => state.books)

  useEffect(() => {
    dispatch(fetchBooks())

  }, [])

  return <div className="py-4 px-3">
    <div className="fs-2 font-medium py-2 d-flex justify-between">

      <h3 className="text-teal-700 ">Book List</h3>
      <CustomModal
        title='Add Book'
        body={<BookForm handleClose={handleClose} />}
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
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
          bookList.loading
            ?
            <tr>
              <td colSpan={headerList.length}>Loading....</td>
            </tr>
            :
            !bookList.data?.length
              ?
              <tr>
                <td colSpan={headerList.length}>No Data Found.</td>
              </tr>
              :
              bookList.data.map((tr, i) => {
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
