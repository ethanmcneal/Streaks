class Api::StaticController < ApplicationController

    def api_test
    render json: {hello: 'hello'}
    end
end
