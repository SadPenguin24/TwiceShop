import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const SearchBoxUsers = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/admin/userlist/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    <Form style={{ marginBottom: "25px" }} onSubmit={submitHandler} inline>
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search Users..."
        className="mr-sm-2 "
      ></Form.Control>
      <Button type="submit" variant="outline-success" className="p-2">
        Search
      </Button>
    </Form>
  );
};

export default SearchBoxUsers;
