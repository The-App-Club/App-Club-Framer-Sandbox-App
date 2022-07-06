import styled from '@emotion/styled';

const StyledImageContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.img`
  display: block;
  max-width: 100%;
  width: 100%;
`;

const Image = ({src, alt}) => {
  return (
    <StyledImageContent>
      <StyledImage src={src} alt={alt} />
    </StyledImageContent>
  );
};

export {Image};
