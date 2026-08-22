import styled from "styled-components";

const Card = styled.div`
  background-color: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text};

  padding: 30px;

  border-radius: 15px;

  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);

  transition: 0.3s ease;

  &:hover {
    transform: translateY(-8px);

    box-shadow: 0 15px 35px
      rgba(0, 0, 0, 0.15);
  }
`;

function StyledCard({ children }) {
  return <Card>{children}</Card>;
}

export default StyledCard;