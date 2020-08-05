import styled from 'styled-components/native';

export const Container = styled.View.attrs({
    // flex: 1
})`
  flex: 1;
  align-items: center;
  justify-content: center; 
  background-color: #555555;
`;

export const Button = styled.TouchableOpacity.attrs({})`
  padding: 50px;
  align-items: center;
  justify-content: center; 
  background-color: purple;
  border-radius: 10px;
`;

export const ButtonText = styled.Text.attrs({})`
    color: white;
`;