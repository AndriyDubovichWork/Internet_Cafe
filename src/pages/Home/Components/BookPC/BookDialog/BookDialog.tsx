import { Dialog, DialogContent } from '@mui/material';
import React from 'react';
import style from './BookDialog.module.scss';
import Button from '../../../../../Styled/Button/Button';
import PresonalInformation from './PresonalInformation/PresonalInformation';
type BookDialogPropsT = {
  isDialogOpen: boolean;
  setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const BookDialog = ({ isDialogOpen, setIsDialogOpen }: BookDialogPropsT) => {
  return (
    <Dialog
      onClose={() => setIsDialogOpen(false)}
      open={isDialogOpen}
      className={style.BookDialog}
      maxWidth={'md'}
      fullWidth
    >
      <DialogContent>
        <Button>1234</Button>
        <PresonalInformation />
      </DialogContent>
    </Dialog>
  );
};

export default BookDialog;
