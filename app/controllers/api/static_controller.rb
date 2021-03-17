class Api::StaticController < ApplicationController

    def api_test
    render json: {hello: 'hello'}
    end

    def api_test_2
        render json: [{hello: 'yo'}, {fizz: 'buzz'}]
    end
end
