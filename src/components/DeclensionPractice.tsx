import { Box, Button, ButtonGroup, Paper, Typography } from '@mui/material';
import { useState } from 'react';
import DeclensionTable from './DeclensionTable';

interface DeclensionPracticeProps {
  onDeclensionSelect: (declension: number) => void;
}

const DeclensionPractice = ({ onDeclensionSelect }: DeclensionPracticeProps) => {
  const [selectedDeclension, setSelectedDeclension] = useState<number | null>(null);

  const handleDeclensionSelect = (declension: number) => {
    setSelectedDeclension(declension);
    onDeclensionSelect(declension);
  };

  return (
    <Box sx={{ width: '100%', mt: 4 }}>
      <Paper elevation={2} sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Select Declension
        </Typography>
        <ButtonGroup variant="contained" sx={{ mb: 3 }}>
          {[1, 2, 3, 4, 5].map((num) => (
            <Button
              key={num}
              onClick={() => handleDeclensionSelect(num)}
              color={selectedDeclension === num ? 'primary' : 'inherit'}
            >
              {num}st
            </Button>
          ))}
        </ButtonGroup>

        {selectedDeclension && (
          <Box sx={{ mt: 3 }}>
            <Typography variant="h6" gutterBottom>
              Practice {selectedDeclension}st Declension
            </Typography>
            <DeclensionTable declension={selectedDeclension} />
          </Box>
        )}
      </Paper>
    </Box>
  );
};

export default DeclensionPractice; 