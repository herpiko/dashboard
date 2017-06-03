/**
 * 
 * Action creator untuk menngambil data stack dari api, yang mereturn sebuah
 * promise dengan bantuan 'redux-promise-middleware' dan 'redux-thunk'
 * 
 */

import axios from "axios"
import { 
	FETCH_STACKS,	FETCH_STACK, CREATE_STACK, RESET_STACK_FIELDS
} from "./actionTypes"

import { ORCINUS_API_HOST, ORCINUS_API_PORT } from "../config/environtment"

export function fetchStacks() {
	return {
		type: FETCH_STACKS,
		payload: axios.post(`http://${ORCINUS_API_HOST}:${ORCINUS_API_PORT}/apis/stack`)
	}
}

export function fetchStack() {
	return {
		type: FETCH_STACK,
		// payload: axios.get(`http://${ORCINUS_API_HOST}:${ORCINUS_API_PORT}/wordpress-app`)
		payload: axios.get(`/wordpress-app`)
	}
}

export function createStack(props) {
	const request = axios({
		method: 'post',
		data: props,
		url: `http://${ORCINUS_API_HOST}:${ORCINUS_API_PORT}/apis/stack/create`,
		headers: {
			'Content-Type': 'application/json'
		}
	});

	return {
		type: CREATE_STACK,
		payload: request
	}	
}

export function resetStackFields() {
	return {
		type: RESET_STACK_FIELDS
	}
}

export function deleteStackAPI(id) {
	const request = axios({
		method: 'post',
		url: `http://${ORCINUS_API_HOST}:${ORCINUS_API_PORT}/apis/stack/delete`,
		data: JSON.parse(`{ "id": "${id}" }`),
		headers: {
			'Content-Type': 'application/json'
		}
	})

	return {
		type: "DELETE_STACK",
		payload: request
	}
}

export function setDeleteStack(id) {
	return {
		type: "SET_DELETE_STACK",
		id
	}
}

export function deleteStack(id) {
	return (dispatch) => {
		dispatch(deleteStackAPI(id)).then(() => {
			dispatch(setDeleteStack(id))
		})
	}
}

export function fetchServices(stackId) {
	const request = axios({
		method: 'post',
		url: `http://${ORCINUS_API_HOST}:${ORCINUS_API_PORT}/apis/stack/list-services`,
		data: JSON.parse(`{ "id": "${stackId}"}`),
		headers: {
			'Content-Type': 'application/json'
		}
	})

	return {
		type: "FETHC_SERVICE_BY_STACK_ID",
		payload: request
	}
}