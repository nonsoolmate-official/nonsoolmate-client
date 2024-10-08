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

const Chip = styled.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;
  padding: 0.4rem 0.8rem;
  border: 1px solid ${({ theme }) => theme.colors.grey_100};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.grey_800};
`;

const Logo = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  object-fit: cover;
`;
