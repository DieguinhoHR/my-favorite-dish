<template>    
    <div>
       <h1>Cadastre-se</h1>
       <hr>

       <form>
            <div class="form-group col-sm-7">
                <label for="username">Nome de Usuário:</label>
                <input type="username" class="form-control" id="username">
            </div>
            <div class="form-group col-sm-7">
                <label for="password">Senha:</label>
                <input type="password" class="form-control" id="password">
            </div>
            <div class="form-group col-sm-7">
                <label for="email">E-mail:</label>
                <input type="email" class="form-control" id="email">
            </div>        
            <div class="form-group col-sm-7">
               <my-button :title="title" :btnClass="btnClass"></my-button>
            </div>    
        </form>
    </div>
</template>

<script>
import Button from '@/components/shared/button/Button'

export default {
    components: {
        'my-button': Button
    },
    data() {
        return  {
            title: 'Salvar',
            btnClass: 'btn btn-primary'
        }
    }
}

</script>