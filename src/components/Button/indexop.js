import { ButtonContainerOp } from './stylesop';

const ButtonOp = ({label, onClick}) => {
    return (
      <ButtonContainerOp onClick={onClick} type="button">
       {label}
      </ButtonContainerOp>
    );
  }

  export default ButtonOp;