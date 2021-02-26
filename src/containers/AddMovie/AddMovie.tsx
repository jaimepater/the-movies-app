import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Grid, TextField } from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { useForm } from 'react-hook-form';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import TMContainer from '../../components/TMContainer/TMContainer';
import { Colors } from '../../theme/theme';
import { fileToBase64 } from '../../utils/fileToBase64';
import { addMovie } from '../../core/store/features/movies/moviesSlice';
import { Page } from '../../components/Page/Page';

interface addMovieShape {
  title: string;
  image: string;
  release: string;
  description: string;
}

const AddMovie: FunctionComponent = () => {
  const { t } = useTranslation();
  const { register, handleSubmit, setValue, getValues } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (data: addMovieShape) => {
    dispatch(addMovie({ ...data, id: uuidv4() }));
    history.push('/');
  };

  const handlerFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target?.files;
    if (files !== null) {
      const fileString = await fileToBase64(files[0]);
      setValue('image', fileString);
    }
  };

  const handlerDate = async (date: MaterialUiPickersDate) => {
    setValue('release', date?.toLocaleDateString());
  };

  React.useEffect(() => {
    register('release');
    register('image'); // custom register Antd input
    setValue('release', new Date().toLocaleDateString());
  }, [register]);
  return (
    <Page>
      <TMContainer
        headerText={t('addNewMovie')}
        headerBackground={Colors.Gray40}
        headerLeftAction={
          <Button
            form="add-movie-form"
            type="submit"
            variant="contained"
            color="primary"
            size="small"
          >
            {t('saveMovie')}
          </Button>
        }
      >
        <form id="add-movie-form" onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3} alignItems="center">
            <Grid item>
              <TextField
                variant="outlined"
                margin="normal"
                required
                inputRef={register}
                id="title"
                name="title"
                label={t('movieTitle')}
              />
            </Grid>
            <Grid item>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                name="releaseDate"
                id="releaseDate"
                label={t('releaseDate')}
                value={getValues('releaseDate')}
                onChange={handlerDate}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </Grid>
            <Grid item>
              <label htmlFor="btn-upload">
                <input
                  id="btn-upload"
                  name="image"
                  style={{ display: 'none' }}
                  type="file"
                  onChange={handlerFile}
                />
                <Button className="btn-choose" variant="outlined" component="span">
                  {t('chooseFiles')}
                </Button>
              </label>
            </Grid>
          </Grid>
          <TextField
            id="description"
            label={t('description')}
            multiline
            fullWidth
            inputRef={register}
            name="description"
            rows={4}
            variant="outlined"
          />
        </form>
      </TMContainer>
    </Page>
  );
};

export default AddMovie;
