import {
    Container,
    Form,
    Button,
    Input,
    TextArea,
    Label,
    Error,
    Close,
} from './style';
import {MdClose} from 'react-icons/md'
import {useForm} from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from '../../services/api';
import Draggable from 'react-draggable'

const AddWork = ({ setVisibleWork}) =>{
    const schema = yup.object().shape({
        title: yup.string().required('Campo Obrigatório'),
        description: yup.string().required('Campo Obrigatório'),
        deploy_url: yup.string().required('Campo Obrigatório')
    })
    const {register, handleSubmit, errors} = useForm({
        resolver: yupResolver(schema),
    });

    const handleWork = (data) =>{
        api.post('/users/works', {...data})
        setVisibleWork(false)
    }

    const size = window.innerWidth

    return(
        <Draggable disabled={size < 1000 ? true : false}>
        <Container>
            <Close><MdClose onClick={() => setVisibleWork(false)}/></Close>
            <Form onSubmit={handleSubmit(handleWork)}>
                <Label>Título</Label>
                <Input name="title" ref={register}/>
                <Error>{errors.title?.message}</Error> 
                <Label>Descrição</Label>
                <TextArea name="description" ref={register}/>
                <Error>{errors.description?.message}</Error>
                <Label>Url</Label>
                <Input name="deploy_url" ref={register}/>
                <Error>{errors.deploy_url?.message}</Error>
                <Button type="submit">Adicionar</Button>
            </Form>
        </Container>
        </Draggable>
    )
}

export default AddWork