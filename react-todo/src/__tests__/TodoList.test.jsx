import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList"; // ← import your component here

test("renders initial todos", () => {
  render(<TodoList />);
  expect(screen.getByText(/Learn React/)).toBeInTheDocument();
  expect(screen.getByText(/Write Tests/)).toBeInTheDocument();
});

test("adds a new todo", () => {
  render(<TodoList />);
  fireEvent.change(screen.getByPlaceholderText(/Add todo/i), {
    target: { value: "New Task" },
  });
  fireEvent.click(screen.getByText(/Add/i));
  expect(screen.getByText(/New Task/)).toBeInTheDocument();
});

test("toggles a todo", () => {
  render(<TodoList />);
  const todo = screen.getByText(/Learn React/);
  fireEvent.click(todo);
  expect(todo).toHaveStyle("text-decoration: line-through");
});

test("deletes a todo", () => {
  render(<TodoList />);
  fireEvent.click(screen.getAllByText(/Delete/)[0]);
  expect(screen.queryByText(/Learn React/)).not.toBeInTheDocument();
});
