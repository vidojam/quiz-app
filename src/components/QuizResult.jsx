import { Col, Container, Row, Button } from "react-bootstrap";

export default function QuizResult ({score, quizLength, handleReset}) {
  return (
    <Container className="quiz-result">
      <Row>
        <Col>
          <h2>Quiz Result</h2>
          <p>Your scored {score} out of {quizLength} </p>
          <Button onClick={handleReset}>Reset</Button>
        </Col>
      </Row>
    </Container>

  )
}