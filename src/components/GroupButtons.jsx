import { Button } from "./Button";
import { Container } from "./Container";

export const GroupButtons = () => {
  return (
    <Container styleContainer="mt-5">
      <Button className="btn-primary w-100 mt-2">Mark all as completed</Button>
      <Button className="btn-primary w-100 mt-2">Mark all as incomplete</Button>
      <Button className="btn-primary w-100 mt-2">Reset to initial</Button>
      <Button className="btn-primary w-100 mt-2">Remove all items</Button>
    </Container>
  );
};
