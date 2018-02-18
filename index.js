import { app } from 'hyperapp'
import state from './state'
import {actions, view} from "./components/Indecision"
import "./style.scss";

app(state, actions, view, document.body)