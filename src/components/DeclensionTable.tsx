import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import { declensionEndings } from '../data/declensions';

interface DeclensionTableProps {
  declension: number;
}

const cases = ['Nominative', 'Genitive', 'Dative', 'Accusative', 'Ablative', 'Vocative'];
const numbers = ['Singular', 'Plural'];

const DeclensionTable = ({ declension }: DeclensionTableProps) => {
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [showAnswers, setShowAnswers] = useState(false);

  // Clear answers when declension changes
  useEffect(() => {
    setAnswers({});
    setShowAnswers(false);
  }, [declension]);

  const handleAnswerChange = (caseName: string, number: string, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [`${caseName}-${number}`]: value
    }));
  };

  const clearAnswers = () => {
    setAnswers({});
    setShowAnswers(false);
  };

  const checkAnswer = (caseName: string, number: string, answer: string) => {
    const correctAnswer = declensionEndings[declension][caseName][number.toLowerCase() as 'singular' | 'plural'];
    return answer.toLowerCase() === correctAnswer.toLowerCase();
  };

  return (
    <Box>
      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Case</TableCell>
              <TableCell>Singular</TableCell>
              <TableCell>Plural</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cases.map((caseName) => (
              <TableRow key={caseName}>
                <TableCell component="th" scope="row">
                  {caseName}
                </TableCell>
                {numbers.map((number) => (
                  <TableCell key={`${caseName}-${number}`}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      size="small"
                      value={answers[`${caseName}-${number}`] || ''}
                      onChange={(e) => handleAnswerChange(caseName, number, e.target.value)}
                      placeholder={`Enter ${number.toLowerCase()} form`}
                      error={!!(answers[`${caseName}-${number}`] && !checkAnswer(caseName, number, answers[`${caseName}-${number}`]))}
                      helperText={
                        showAnswers && answers[`${caseName}-${number}`] && !checkAnswer(caseName, number, answers[`${caseName}-${number}`])
                          ? `Correct: ${declensionEndings[declension][caseName][number.toLowerCase() as 'singular' | 'plural']}`
                          : ''
                      }
                    />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          Enter the endings for the {declension}st declension
        </Typography>
        <Box>
          <Button
            variant="outlined"
            size="small"
            onClick={clearAnswers}
            sx={{ mr: 1 }}
          >
            Clear All
          </Button>
          <Button
            variant="outlined"
            size="small"
            onClick={() => setShowAnswers(!showAnswers)}
          >
            {showAnswers ? 'Hide Answers' : 'Show Answers'}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default DeclensionTable; 