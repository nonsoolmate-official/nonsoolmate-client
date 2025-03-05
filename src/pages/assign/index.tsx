import styled from "styled-components";
import Header from "./components/Header";
import { useState } from "react";
import TestTable from "./components/TestTable";
import StudentTable from "./components/StudentTable";

export default function index() {
  const [assign, setAssign] = useState("Test");

  function handleAssign(clicked: string) {
    setAssign(clicked);
  }

  return (
    <Container>
      <Header handleAssign={handleAssign} assign={assign} />
      {assign === "Test" ? <TestTable /> : <StudentTable />}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 3.9rem 21.5rem;
`;
