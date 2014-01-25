Comb = require 'csscomb'

module.exports = class CsscombCompiler
  brunchPlugin: yes
  type: "stylesheet"
  extension: "css"
  pattern: /\.(?:css|scss|sass|less)$/

  constructor: (@config) ->
    {encoding} = @config.csscomb ? {encoding: 'zen'}
    @comb = new Comb encoding

  compile: ({data, path, map}, callback) ->
    try @comb.processPath path
    catch error
    callback(error, {data, map})




