import { ReactNode } from "react";
import styled from "styled-components";

interface UnivChipProps {
  logo?: string;
  children: ReactNode;
}

export default function UnivChip({ logo = "", children }: UnivChipProps) {
  return (
    <Chip>
      {logo && <Logo src={logo} alt="university-logo" />}
      {children}
    </Chip>
  );
}

const Logo = styled.img`
  width: 2.4rem;
  height: 2.4rem;

  object-fit: cover;
`;

const Chip = styled.div`
  display: flex;
  align-items: center;
  padding: 0.4rem 0.8rem;
  gap: 0.6rem;
  border: 1px solid ${({ theme }) => theme.colors.grey_100};
  border-radius: 0.4rem;
  color: ${({ theme }) => theme.colors.grey_800};
`;
