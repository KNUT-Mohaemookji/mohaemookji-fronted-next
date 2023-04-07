import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { RootState } from '../../../../store';

export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>

export type Row = {
    [key: string]: string,
}