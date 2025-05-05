import { Box, Paper, Typography, Button, ButtonGroup, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { useState, useEffect } from 'react';
import { verbEndings } from '../data/verbEndings';
import { stripMacrons } from '../data/stripMacrons';

const tenses = [
  { key: 'present', label: 'Present' },
  { key: 'imperfect', label: 'Imperfect' },
  { key: 'future', label: 'Future' },
  { key: 'perfect', label: 'Perfect' },
  { key: 'pluperfect', label: 'Pluperfect' },
  { key: 'futurePerfect', label: 'Future Perfect' },
];
const voices = [
  { key: 'active', label: 'Active' },
  { key: 'passive', label: 'Passive' },
];
const persons = [
  { key: '1s', label: '1st Sing.' },
  { key: '2s', label: '2nd Sing.' },
  { key: '3s', label: '3rd Sing.' },
  { key: '1p', label: '1st Plur.' },
  { key: '2p', label: '2nd Plur.' },
  { key: '3p', label: '3rd Plur.' },
];

const VerbPractice = () => {
  const [selectedTense, setSelectedTense] = useState('present');
  const [selectedVoice, setSelectedVoice] = useState('active');
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [showAnswers, setShowAnswers] = useState(false);

  useEffect(() => {
    setAnswers({});
    setShowAnswers(false);
  }, [selectedTense, selectedVoice]);

  const handleAnswerChange = (person: string, value: string) => {
    setAnswers(prev => ({ ...prev, [person]: value }));
  };

  const clearAnswers = () => {
    setAnswers({});
    setShowAnswers(false);
  };

  const checkAnswer = (person: string, answer: string) => {
    const correct = (verbEndings as any)[selectedVoice][selectedTense][person];
    return stripMacrons(answer) === stripMacrons(correct);
  };

  return (
    <Box sx={{ width: '100%', mt: 4 }}>
      <Paper elevation={2} sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Latin Verb Endings Practice
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <FormControl size="small">
            <InputLabel id="voice-label">Voice</InputLabel>
            <Select
              labelId="voice-label"
              value={selectedVoice}
              label="Voice"
              onChange={e => setSelectedVoice(e.target.value)}
            >
              {voices.map(v => (
                <MenuItem key={v.key} value={v.key}>{v.label}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl size="small">
            <InputLabel id="tense-label">Tense</InputLabel>
            <Select
              labelId="tense-label"
              value={selectedTense}
              label="Tense"
              onChange={e => setSelectedTense(e.target.value)}
            >
              {tenses.map(t => (
                <MenuItem key={t.key} value={t.key}>{t.label}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <TableContainer component={Paper} sx={{ mt: 2 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Person</TableCell>
                <TableCell>Ending</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {persons.map((p) => (
                <TableRow key={p.key}>
                  <TableCell>{p.label}</TableCell>
                  <TableCell>
                    <TextField
                      fullWidth
                      variant="outlined"
                      size="small"
                      value={answers[p.key] || ''}
                      onChange={e => handleAnswerChange(p.key, e.target.value)}
                      placeholder="Enter ending"
                      error={!!(answers[p.key] && !checkAnswer(p.key, answers[p.key]))}
                      helperText={
                        showAnswers && answers[p.key] && !checkAnswer(p.key, answers[p.key])
                          ? `Correct: ${(verbEndings as any)[selectedVoice][selectedTense][p.key]}`
                          : ''
                      }
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
          <Button variant="outlined" size="small" onClick={clearAnswers}>Clear All</Button>
          <Button variant="outlined" size="small" onClick={() => setShowAnswers(!showAnswers)}>
            {showAnswers ? 'Hide Answers' : 'Show Answers'}
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default VerbPractice; 