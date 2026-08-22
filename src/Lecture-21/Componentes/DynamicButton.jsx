import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) =>
    props.variant === "primary"
      ? props.theme.primary
      : props.theme.secondary};

  color: ${(props) =>
    props.variant === "primary"
      ? "#ffffff"
      : "#ffffff"};

  padding: 12px 24px;
  border: none;
  border-radius: 8px;

  font-size: 16px;
  font-weight: 600;

  cursor: pointer;

  transition: 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    opacity: 0.85;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

function DynamicButton({ children, variant = "primary" }) {
  return (
    <Button variant={variant}>
      {children}
    </Button>
  );
}

export default DynamicButton;